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
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('click', (e) => this.handleMapClick(e));
        
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
    
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / this.scale);
        const y = Math.floor((e.clientY - rect.top) / this.scale);
        
        document.getElementById('mapCoordsDisplay').textContent = `X: ${x}, Y: ${y}`;
    },
    
    handleMapClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / this.scale);
        const y = Math.floor((e.clientY - rect.top) / this.scale);
        
        // Open modal if it's hidden, or just fill the coords
        if (document.getElementById('modalSpawn').style.display === 'none') {
            if (typeof openSpawnModal === 'function') openSpawnModal();
        }
        
        // Fill coordinates based on current section
        const sectionBtn = document.querySelector('.section-btn.active');
        let section = 0;
        if (sectionBtn) section = parseInt(sectionBtn.dataset.section);
        
        // Ensure the modal's map matches the visualizer's map
        const inputMap = document.getElementById('inputMapId');
        if (inputMap) inputMap.value = this.currentMapId;
        
        if (section === 0 || section === 2) {
            const inputX = document.getElementById('inputPosX');
            const inputY = document.getElementById('inputPosY');
            if (inputX) inputX.value = x;
            if (inputY) inputY.value = y;
        } else {
            const startX = document.getElementById('inputStartX');
            const startY = document.getElementById('inputStartY');
            const endX = document.getElementById('inputEndX');
            const endY = document.getElementById('inputEndY');
            if (startX) startX.value = x;
            if (startY) startY.value = y;
            if (endX) endX.value = x + 5;
            if (endY) endY.value = y + 5;
        }
        
        if (typeof showToast === 'function') showToast(`📍 Coordenadas capturadas: ${x}, ${y}`, 'info');
    },
    
    drawSpawns() {
        this.overlay.innerHTML = '';
        if (typeof state === 'undefined' || !state.spawns) return;
        
        state.spawns.forEach((spawn, index) => {
            if (spawn.mapId !== this.currentMapId) return;
            
            const dot = document.createElement('div');
            dot.className = 'map-dot';
            
            // Differentiate NPC vs Monster
            if (spawn.section === 0) dot.classList.add('npc');
            else dot.classList.add('monster');
            
            // Positioning (using start coordinates for spots)
            const x = (spawn.section === 1 ? spawn.startX : spawn.posX) * this.scale;
            const y = (spawn.section === 1 ? spawn.startY : spawn.posY) * this.scale;
            
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            
            const mobName = typeof getMonsterName === 'function' ? getMonsterName(spawn.mobId) : spawn.name;
            dot.title = `${mobName} (${x/this.scale}, ${y/this.scale})`;
            
            this.overlay.appendChild(dot);
        });
    }
};

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => MapViewer.init());
