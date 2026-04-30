/**
 * Map Viewer Module for MuEditor Pro
 * Handles visual representation of game maps and spawn points.
 */

const MapViewer = {
    canvas: null,
    ctx: null,
    overlay: null,
    currentMapId: 0,
    mapImages: {},
    scale: 2, // 256 * 2 = 512px canvas
    
    init() {
        this.canvas = document.getElementById('mapCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.overlay = document.getElementById('mapOverlay');
        
        this.setupEventListeners();
    },
    
    setupEventListeners() {
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('click', (e) => this.handleMapClick(e));
        
        document.getElementById('btnToggleMap').addEventListener('click', () => {
            const viz = document.getElementById('mapVisualizer');
            const isHidden = viz.style.display === 'none';
            viz.style.display = isHidden ? 'flex' : 'none';
            document.getElementById('btnToggleMap').textContent = isHidden ? '🗺️ Ocultar Mapa' : '🗺️ Ver Mapa';
            if (isHidden) this.render();
        });
    },
    
    async loadMap(mapId) {
        if (this.mapImages[mapId]) return this.mapImages[mapId];
        
        return new Promise((resolve) => {
            const img = new Image();
            img.src = `assets/maps/${mapId}.png`;
            img.onload = () => {
                this.mapImages[mapId] = img;
                resolve(img);
            };
            img.onerror = () => {
                // Fallback to a placeholder or 0.png
                img.src = 'assets/maps/0.png';
            };
        });
    },
    
    async render(mapId = null) {
        if (mapId !== null) this.currentMapId = mapId;
        
        const img = await this.loadMap(this.currentMapId);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        
        this.drawSpawns();
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
            openModal();
        }
        
        // Fill coordinates based on current section
        const section = parseInt(document.querySelector('.section-btn.active').dataset.section);
        if (section === 0 || section === 2) {
            document.getElementById('inputPosX').value = x;
            document.getElementById('inputPosY').value = y;
        } else {
            document.getElementById('inputStartX').value = x;
            document.getElementById('inputStartY').value = y;
            document.getElementById('inputEndX').value = x + 5;
            document.getElementById('inputEndY').value = y + 5;
        }
        
        showToast(`📍 Coordenadas capturadas: ${x}, ${y}`, 'info');
    },
    
    drawSpawns() {
        this.overlay.innerHTML = '';
        if (!state.spawns) return;
        
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
            dot.title = `${spawn.name} (${x/this.scale}, ${y/this.scale})`;
            
            this.overlay.appendChild(dot);
        });
    }
};

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => MapViewer.init());
