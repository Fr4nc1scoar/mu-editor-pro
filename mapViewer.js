/**
 * Map Viewer Module for MuEditor Pro
 * Handles visual representation of game maps by parsing binary .att files.
 */

const MapViewer = {
    canvas: null,
    ctx: null,
    overlay: null,
    currentMapId: 0,
    mapDataCache: {},
    scale: 2, // 256 * 2 = 512px canvas
    zoom: 1,
    panX: 0,
    panY: 0,
    isPanning: false,
    panStartX: 0,
    panStartY: 0,
    
    init() {
        this.canvas = document.getElementById('mapCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.overlay = document.getElementById('mapOverlay');
        
        this.setupEventListeners();
        this.render(0);
    },
    
    setupEventListeners() {
        const wrapper = document.querySelector('.map-canvas-wrapper');
        
        wrapper.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        window.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        wrapper.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        wrapper.addEventListener('click', (e) => this.handleMapClick(e));
        
        // Prevent context menu on right click for panning
        wrapper.addEventListener('contextmenu', e => e.preventDefault());
        
        // Zoom Controls
        wrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY < 0 ? 1.2 : 0.8;
            this.setZoom(this.zoom * delta, e.clientX, e.clientY);
        });
        
        const btnZoomIn = document.getElementById('btnZoomIn');
        const btnZoomOut = document.getElementById('btnZoomOut');
        const btnZoomReset = document.getElementById('btnZoomReset');
        
        if (btnZoomIn) btnZoomIn.addEventListener('click', () => {
            const rect = wrapper.getBoundingClientRect();
            this.setZoom(this.zoom * 1.5, rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
        
        if (btnZoomOut) btnZoomOut.addEventListener('click', () => {
            const rect = wrapper.getBoundingClientRect();
            this.setZoom(this.zoom / 1.5, rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
        
        if (btnZoomReset) btnZoomReset.addEventListener('click', () => {
            this.zoom = 1;
            this.panX = 0;
            this.panY = 0;
            this.updateTransform();
        });
    },

    setZoom(newZoom, mouseX, mouseY) {
        const wrapper = document.querySelector('.map-canvas-wrapper');
        const rect = wrapper.getBoundingClientRect();
        
        // Clamp zoom
        newZoom = Math.min(Math.max(1, newZoom), 5);
        
        // Calculate mouse position relative to wrapper
        const x = mouseX - rect.left;
        const y = mouseY - rect.top;
        
        // Adjust pan to zoom around mouse
        const scaleChange = newZoom / this.zoom;
        this.panX = x - (x - this.panX) * scaleChange;
        this.panY = y - (y - this.panY) * scaleChange;
        
        this.zoom = newZoom;
        this.updateTransform();
    },

    updateTransform() {
        const zoomWrapper = document.getElementById('mapZoomWrapper');
        if (zoomWrapper) {
            // Constrain pan within bounds
            const wrapper = document.querySelector('.map-canvas-wrapper');
            const rect = wrapper.getBoundingClientRect();
            
            const maxPanX = 0;
            const maxPanY = 0;
            const minPanX = rect.width - (rect.width * this.zoom);
            const minPanY = rect.height - (rect.height * this.zoom);
            
            this.panX = Math.min(maxPanX, Math.max(minPanX, this.panX));
            this.panY = Math.min(maxPanY, Math.max(minPanY, this.panY));
            
            zoomWrapper.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
        }
    },
    
    getAttFileName(mapId) {
        // Map ID to Terrain ID mapping (usually mapId + 1)
        const terrainId = mapId + 1;
        // Explicit relative path for Vercel compatibility
        return `./Terrain/Terrain${terrainId}.att`;
    },

    async loadMap(mapId) {
        if (this.mapDataCache[mapId]) return this.mapDataCache[mapId];
        
        const fileName = this.getAttFileName(mapId);
        
        try {
            const response = await fetch(fileName);
            if (!response.ok) throw new Error('Network response was not ok');
            const buffer = await response.arrayBuffer();
            
            // Expected size: 65539 bytes (3 header bytes + 256*256 bytes)
            // or 65540 bytes (4 header bytes) depending on client version
            // Data usually starts at byte 3 or 4. We'll find the offset.
            const dataView = new Uint8Array(buffer);
            let offset = dataView.length - (256 * 256);
            if (offset < 0) offset = 0; // Fallback
            
            const grid = new Uint8Array(256 * 256);
            for(let i=0; i < 256*256; i++) {
                grid[i] = dataView[offset + i];
            }

            this.mapDataCache[mapId] = grid;
            return grid;
        } catch (error) {
            console.error('Error loading .att file:', error);
            // Fallback to Lorencia if failed
            if (mapId !== 0) return this.loadMap(0);
            return new Uint8Array(256 * 256); // Empty grid
        }
    },
    
    async render(mapId = null) {
        if (mapId !== null) this.currentMapId = mapId;
        
        const grid = await this.loadMap(this.currentMapId);
        this.drawTerrain(grid);
        this.drawSpawns();
        
        // Update map name display
        const mapName = typeof getMapName === 'function' ? getMapName(this.currentMapId) : `Mapa ${this.currentMapId}`;
        document.getElementById('mapNameDisplay').textContent = `Mapa: ${mapName}`;
    },
    
    drawTerrain(grid) {
        // We will generate an ImageData object of 256x256, then draw it scaled
        const imgData = this.ctx.createImageData(256, 256);
        const data = imgData.data;
        
        for (let y = 0; y < 256; y++) {
            for (let x = 0; x < 256; x++) {
                // The ATT files are stored sequentially, row by row
                const idx = y * 256 + x;
                const attr = grid[idx];
                const pixelIdx = idx * 4;
                
                // Color mapping based on Pentium Tools / ATT flags
                // Bit 0 (1) = Safe Zone
                // Bit 2 (4) = Wall / Blocked
                // Bit 3 (8) = Non-walkable / Water
                
                if ((attr & 4) !== 0 || (attr & 8) !== 0) {
                    // Wall / Blocked / Water -> Dark Gray / Almost Black
                    data[pixelIdx] = 20;     // R
                    data[pixelIdx + 1] = 20; // G
                    data[pixelIdx + 2] = 25; // B
                    data[pixelIdx + 3] = 255; // Alpha
                } else if ((attr & 1) !== 0) {
                    // Safe Zone -> Purple tint
                    data[pixelIdx] = 60;     // R
                    data[pixelIdx + 1] = 40; // G
                    data[pixelIdx + 2] = 90; // B
                    data[pixelIdx + 3] = 255; // Alpha
                } else {
                    // Walkable -> Lighter Gray/Greenish
                    data[pixelIdx] = 70;     // R
                    data[pixelIdx + 1] = 85; // G
                    data[pixelIdx + 2] = 70; // B
                    data[pixelIdx + 3] = 255; // Alpha
                }
            }
        }
        
        // Use a temporary canvas to scale up the image without blurring
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 256;
        tempCanvas.height = 256;
        tempCanvas.getContext('2d').putImageData(imgData, 0, 0);
        
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(tempCanvas, 0, 0, 256, 256, 0, 0, this.canvas.width, this.canvas.height);
    },
    
    handleMouseDown(e) {
        if (e.button === 2 || e.button === 1) { // Right click or middle click for panning
            e.preventDefault();
            this.isPanning = true;
            this.panStartX = e.clientX - this.panX;
            this.panStartY = e.clientY - this.panY;
            const wrapper = document.querySelector('.map-canvas-wrapper');
            if (wrapper) wrapper.style.cursor = 'grabbing';
            return;
        }

        if (e.button !== 0) return; // Only left click
        e.preventDefault(); // Prevent native browser drag operations
        
        const fastMode = document.getElementById('fastModeToggle');
        const isFastMode = fastMode && fastMode.checked;
        const section = typeof getActiveSection === 'function' ? getActiveSection() : 0;
        const hasSelectedMob = typeof currentMobId !== 'undefined' && currentMobId !== null;

        if (isFastMode && section === 1 && hasSelectedMob) {
            const rect = this.canvas.getBoundingClientRect();
            const scaleX = this.canvas.width / rect.width;
            const scaleY = this.canvas.height / rect.height;
            const x = Math.floor((e.clientX - rect.left) * scaleX / this.scale);
            const y = Math.floor((e.clientY - rect.top) * scaleY / this.scale);

            this.isDragging = true;
            this.dragStartX = x;
            this.dragStartY = y;
            
            const sel = document.getElementById('mapSelection');
            if (sel) {
                sel.style.display = 'block';
                sel.style.left = `${x * this.scale}px`;
                sel.style.top = `${y * this.scale}px`;
                sel.style.width = `0px`;
                sel.style.height = `0px`;
            }
        }
    },
    
    handleMouseUp(e) {
        if (this.isPanning) {
            this.isPanning = false;
            const wrapper = document.querySelector('.map-canvas-wrapper');
            if (wrapper) wrapper.style.cursor = 'crosshair';
            return;
        }

        if (!this.isDragging) return;
        this.isDragging = false;
        
        const sel = document.getElementById('mapSelection');
        if (sel) sel.style.display = 'none';

        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        let x = Math.floor((e.clientX - rect.left) * scaleX / this.scale);
        let y = Math.floor((e.clientY - rect.top) * scaleY / this.scale);
        
        // Clamp to map boundaries
        x = Math.max(0, Math.min(255, x));
        y = Math.max(0, Math.min(255, y));
        
        const minX = Math.min(this.dragStartX, x);
        const minY = Math.min(this.dragStartY, y);
        let maxX = Math.max(this.dragStartX, x);
        let maxY = Math.max(this.dragStartY, y);
        
        // If they just clicked without dragging, make it a 1x1 spot
        if (minX === maxX && minY === maxY) {
            // we leave it as 1x1, or we could expand it
            // actually user requested "que yo mismo lo dibuje", so 1x1 is fine if they don't drag
        }
        
        // Sync modal tabs state so saveSpawn works correctly
        if (typeof setActiveSection === 'function') {
            setActiveSection(1);
        }
        
        const inputMap = document.getElementById('inputMapId');
        if (inputMap) inputMap.value = this.currentMapId;
        
        const startXEl = document.getElementById('inputBeginX');
        const startYEl = document.getElementById('inputBeginY');
        const endXEl = document.getElementById('inputEndX');
        const endYEl = document.getElementById('inputEndY');
        if (startXEl) startXEl.value = minX;
        if (startYEl) startYEl.value = minY;
        if (endXEl) endXEl.value = maxX;
        if (endYEl) endYEl.value = maxY;
        
        if (typeof showToast === 'function') showToast(`📍 Spot dibujado: ${minX},${minY} a ${maxX},${maxY}`, 'info');
        if (typeof state !== 'undefined') state.editingId = null;
        if (typeof saveSpawn === 'function') saveSpawn(true);
        
        // Set flag to ignore subsequent click event
        this.wasDragging = true;
        setTimeout(() => { this.wasDragging = false; }, 100);
    },
    
    handleMouseMove(e) {
        if (this.isPanning) {
            this.panX = e.clientX - this.panStartX;
            this.panY = e.clientY - this.panStartY;
            this.updateTransform();
            return;
        }

        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const x = Math.floor((e.clientX - rect.left) * scaleX / this.scale);
        const y = Math.floor((e.clientY - rect.top) * scaleY / this.scale);
        
        document.getElementById('mapCoordsDisplay').textContent = `X: ${x}, Y: ${y}`;
        
        if (this.isDragging) {
            const sel = document.getElementById('mapSelection');
            if (sel) {
                const minX = Math.min(this.dragStartX, x);
                const minY = Math.min(this.dragStartY, y);
                const maxX = Math.max(this.dragStartX, x);
                const maxY = Math.max(this.dragStartY, y);
                
                sel.style.left = `${(minX / 256) * 100}%`;
                sel.style.top = `${(minY / 256) * 100}%`;
                sel.style.width = `${((maxX - minX + 1) / 256) * 100}%`;
                sel.style.height = `${((maxY - minY + 1) / 256) * 100}%`;
            }
            return; // Don't compute hover tooltips while dragging
        }
        
        // Hover Detection
        let hoveredTitle = '';
        if (typeof state !== 'undefined' && state.spawns) {
            for (let i = state.spawns.length - 1; i >= 0; i--) {
                const spawn = state.spawns[i];
                if (spawn.mapId !== this.currentMapId) continue;
                
                const mobName = typeof getMonsterName === 'function' ? getMonsterName(spawn.mobId) : spawn.name;
                
                if (spawn.section === 1) {
                    if (x >= spawn.beginX && x <= spawn.endX && y >= spawn.beginY && y <= spawn.endY) {
                        hoveredTitle = `${mobName} (S: ${spawn.beginX},${spawn.beginY}-${spawn.endX},${spawn.endY})`;
                        break;
                    }
                } else {
                    if (Math.abs(x - spawn.posX) <= 2 && Math.abs(y - spawn.posY) <= 2) {
                        hoveredTitle = `${mobName} (${spawn.posX}, ${spawn.posY})`;
                        break;
                    }
                }
            }
        }
        const display = document.getElementById('mapHoverDisplay');
        if (display) display.textContent = hoveredTitle || '\u00A0';
    },
    
    handleMapClick(e) {
        if (this.wasDragging) return; // Handled by mouseup
        
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const x = Math.floor((e.clientX - rect.left) * scaleX / this.scale);
        const y = Math.floor((e.clientY - rect.top) * scaleY / this.scale);
        
        // Fast mode bypass: Check if we have a monster selected and fast mode is ON
        const fastMode = document.getElementById('fastModeToggle');
        const isFastMode = fastMode && fastMode.checked;
        const hasSelectedMob = typeof currentMobId !== 'undefined' && currentMobId !== null;
        
        let section = typeof getActiveSection === 'function' ? getActiveSection() : 0;
        
        if (isFastMode) {
            // If it's a spot, we rely on handleMouseUp (drag). If they just clicked, handleMouseUp handles the 1x1 spot anyway.
            if (section === 1 && hasSelectedMob) {
                return;
            }
            
            if (!hasSelectedMob) {
                if (typeof showToast === 'function') showToast('⚠️ Por favor, selecciona un monstruo en la lista de la izquierda.', 'warning');
                return;
            }
        }
        
        // Ensure the modal's map matches the visualizer's map
        const inputMap = document.getElementById('inputMapId');
        if (inputMap) inputMap.value = this.currentMapId;
        
        if (section === 0 || section === 2) {
            const inputX = document.getElementById('inputPosX');
            const inputY = document.getElementById('inputPosY');
            if (inputX) inputX.value = x;
            if (inputY) inputY.value = y;
        } else {
            // Handled mostly by drag now, but if they click from modal, we fill start.
            const startX = document.getElementById('inputBeginX');
            const startY = document.getElementById('inputBeginY');
            if (startX) startX.value = x;
            if (startY) startY.value = y;
        }
        if (typeof showToast === 'function') showToast(`📍 Coordenadas capturadas: ${x}, ${y}`, 'info');
        
        if (isFastMode && hasSelectedMob) {
            if (typeof state !== 'undefined') state.editingId = null;
            if (typeof saveSpawn === 'function') saveSpawn(true);
        }
    },
    
    drawSpawns() {
        if (!this.overlay) return;
        this.overlay.innerHTML = '';
        if (typeof state === 'undefined' || !state.spawns) return;
        
        state.spawns.forEach((spawn, index) => {
            if (spawn.mapId !== this.currentMapId) return;
            
            const dot = document.createElement('div');
            dot.className = 'map-dot';
            
            // Differentiate NPC vs Spot vs Monster
            if (spawn.section === 0) dot.classList.add('npc');
            else if (spawn.section === 1) dot.classList.add('spot');
            else dot.classList.add('monster');
            
            let titleText = typeof getMonsterName === 'function' ? getMonsterName(spawn.mobId) : spawn.name;

            if (spawn.section === 1) {
                // Draw as an area
                const beginX = (spawn.beginX / 256) * 100;
                const beginY = (spawn.beginY / 256) * 100;
                const endX = (spawn.endX / 256) * 100;
                const endY = (spawn.endY / 256) * 100;
                
                const width = Math.max(endX - beginX, 0.8); // Min ~2px width visually
                const height = Math.max(endY - beginY, 0.8);
                
                dot.classList.add('map-area');
                dot.style.left = `${beginX}%`;
                dot.style.top = `${beginY}%`;
                dot.style.width = `${width}%`;
                dot.style.height = `${height}%`;
                
                titleText += ` (Spot: ${spawn.beginX},${spawn.beginY} a ${spawn.endX},${spawn.endY})`;
            } else {
                // Draw as a single point
                const x = (spawn.posX / 256) * 100;
                const y = (spawn.posY / 256) * 100;
                
                dot.style.left = `${x}%`;
                dot.style.top = `${y}%`;
                titleText += ` (${spawn.posX}, ${spawn.posY})`;
            }
            
            dot.setAttribute('data-title', titleText);
            
            this.overlay.appendChild(dot);
        });
    }
};

// Note: Initialized via app.js init() sequence to ensure state is loaded first.
