// src/ui/toolbar.js
// SteelModel Lite Toolbar UI
// Provides: Select, Beam Tool, Move (placeholder), Delete (placeholder)
// Integrates directly with BeamTool

import { BeamTool } from '../tools/beamTool.js';
import { Engine } from '../app.js';

export class Toolbar {
    constructor() {
        this.activeTool = null;
        this.beamTool = new BeamTool();
    }

    init() {
        const bar = document.createElement('div');
        bar.style.position = 'absolute';
        bar.style.top = '10px';
        bar.style.right = '10px';
        bar.style.display = 'flex';
        bar.style.gap = '8px';
        bar.style.background = 'rgba(20,20,20,0.85)';
        bar.style.padding = '8px';
        bar.style.borderRadius = '10px';
        bar.style.color = 'white';
        bar.style.fontFamily = 'sans-serif';
        bar.style.zIndex = '1000';

        const btnSelect = this.makeButton('Select');
        const btnBeam = this.makeButton('Beam');
        const btnMove = this.makeButton('Move');
        const btnDelete = this.makeButton('Delete');

        btnSelect.onclick = () => this.activateSelect();
        btnBeam.onclick = () => this.activateBeam();
        btnMove.onclick = () => alert('Move tool coming soon');
        btnDelete.onclick = () => alert('Delete tool coming soon');

        bar.appendChild(btnSelect);
        bar.appendChild(btnBeam);
        bar.appendChild(btnMove);
        bar.appendChild(btnDelete);

        document.body.appendChild(bar);
    }

    makeButton(label) {
        const b = document.createElement('button');
        b.textContent = label;
        b.style.padding = '6px 12px';
        b.style.border = 'none';
        b.style.borderRadius = '6px';
        b.style.cursor = 'pointer';
        b.style.background = '#444';
        b.style.color = 'white';
        b.onmouseenter = () => (b.style.background = '#666');
        b.onmouseleave = () => (b.style.background = '#444');
        return b;
    }

    clearActiveTool() {
        if (this.activeTool === 'beam') this.beamTool.disable();
        this.activeTool = null;
    }

    activateSelect() {
        this.clearActiveTool();
        console.log('Select Tool');
    }

    activateBeam() {
        this.clearActiveTool();
        this.beamTool.enable();
        this.activeTool = 'beam';
    }
}

// Auto init toolbar when DOM is ready
import { Engine as _Engine } from '../app.js';
document.addEventListener('DOMContentLoaded', () => {
    const toolbar = new Toolbar();
    toolbar.init();
});
