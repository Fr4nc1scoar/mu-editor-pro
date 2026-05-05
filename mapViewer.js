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
        
        document.getElementById('btnToggleMap').addEventListener('click', () => {
            const viz = document.getElementById('mapVisualizer');
            const isHidden = window.getComputedStyle(viz).display === 'none';
            viz.style.display = isHidden ? 'flex' : 'none';
            
            const label = document.getElementById('btnToggleMap').querySelector('.btn-label');
            if (label) label.textContent = isHidden ? 'Ocultar Mapa' : 'Ver Mapa';
            
            if (isHidden) this.render();
        });
    },
    
    getAttFileName(mapId) {
        // Map ID to Terrain ID mapping (usually mapId + 1)
        const terrainId = mapId + 1;
        return `Terrain/Terrain${terrainId}.att`;
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
        if (e.button !== 0) return; // Only left click
        const fastMode = document.getElementById('fastModeToggle');
        const fastSelect = document.getElementById('fastModeSection');
        const isFastMode = fastMode && fastMode.checked;
        const section = fastSelect ? parseInt(fastSelect.value) : 0;
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
        const sectionBtns = document.querySelectorAll('.section-btn');
        sectionBtns.forEach(btn => {
            if (parseInt(btn.dataset.section) === 1) {
                btn.classList.add('active');
                const posFields = document.getElementById('positionFields');
                const areaFields = document.getElementById('areaFields');
                if (posFields && areaFields) {
                    posFields.style.display = 'none';
                    areaFields.style.display = 'block';
                }
            } else {
                btn.classList.remove('active');
            }
        });
        
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
        if (typeof saveSpawn === 'function') saveSpawn();
        
        // Set flag to ignore subsequent click event
        this.wasDragging = true;
        setTimeout(() => { this.wasDragging = false; }, 100);
    },
    
    handleMouseMove(e) {
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
                
                sel.style.left = `${minX * this.scale}px`;
                sel.style.top = `${minY * this.scale}px`;
                sel.style.width = `${(maxX - minX + 1) * this.scale}px`;
                sel.style.height = `${(maxY - minY + 1) * this.scale}px`;
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
                        hoveredTitle = `${mobName} (Spot: ${spawn.beginX},${spawn.beginY} a ${spawn.endX},${spawn.endY})`;
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
        if (display) display.textContent = hoveredTitle;
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
        
        let section = 0;
        
        if (isFastMode) {
            const fastSelect = document.getElementById('fastModeSection');
            if (fastSelect) section = parseInt(fastSelect.value);
            
            // IF IT'S A SPOT, WE SHOULD HAVE DRAGGED! 
            // But if we didn't drag, handleMouseUp handles it anyway if section === 1.
            // Wait, handleMouseUp only triggers if this.isDragging was true.
            // But if fastModeSection === 1, handleMouseDown sets isDragging to true!
            // So for section === 1, handleMouseUp ALWAYS handles it.
            if (section === 1 && hasSelectedMob) {
                return;
            }
            
            // Sync modal tabs state so saveSpawn works correctly
            const sectionBtns = document.querySelectorAll('.section-btn');
            sectionBtns.forEach(btn => {
                if (parseInt(btn.dataset.section) === section) {
                    btn.classList.add('active');
                    // Hide/Show correct fields internally
                    const posFields = document.getElementById('positionFields');
                    const areaFields = document.getElementById('areaFields');
                    if (posFields && areaFields) {
                        if (section === 1) {
                            posFields.style.display = 'none';
                            areaFields.style.display = 'block';
                        } else {
                            posFields.style.display = 'block';
                            areaFields.style.display = 'none';
                        }
                    }
                } else {
                    btn.classList.remove('active');
                }
            });
        } else {
            const sectionBtn = document.querySelector('.section-btn.active');
            if (sectionBtn) section = parseInt(sectionBtn.dataset.section);
        }
        
        // If not in fast mode, OR we don't have a mob selected, open modal
        if (!isFastMode || !hasSelectedMob) {
            if (document.getElementById('modalSpawn').style.display === 'none') {
                if (typeof openSpawnModal === 'function') openSpawnModal();
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
            if (typeof saveSpawn === 'function') saveSpawn();
        }
    },
    
    drawSpawns() {
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
                const beginX = spawn.beginX * this.scale;
                const beginY = spawn.beginY * this.scale;
                const endX = spawn.endX * this.scale;
                const endY = spawn.endY * this.scale;
                
                const width = Math.max((endX - beginX), this.scale * 2); // Minimum width 2x scale
                const height = Math.max((endY - beginY), this.scale * 2);
                
                dot.classList.add('map-area');
                dot.style.left = `${beginX}px`;
                dot.style.top = `${beginY}px`;
                dot.style.width = `${width}px`;
                dot.style.height = `${height}px`;
                
                titleText += ` (Spot: ${spawn.beginX},${spawn.beginY} a ${spawn.endX},${spawn.endY})`;
            } else {
                // Draw as a single point
                const x = spawn.posX * this.scale;
                const y = spawn.posY * this.scale;
                
                dot.style.left = `${x}px`;
                dot.style.top = `${y}px`;
                titleText += ` (${spawn.posX}, ${spawn.posY})`;
            }
            
            dot.setAttribute('data-title', titleText);
            
            this.overlay.appendChild(dot);
        });
    }
};

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => MapViewer.init());
