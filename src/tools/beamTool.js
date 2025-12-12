// src/tools/beamTool.js
// Beam creation tool: Click point A, Click point B → creates a beam using current section.

import * as THREE from 'three';
import { Engine } from '../app.js';
import Sections from '../models/sections.js';
import { createBeamMesh } from './beamMeshFactory.js';

export class BeamTool {
    constructor() {
        this.active = false;
        this.points = [];
        this.currentSection = 'IPE200';
        this.currentFamily = 'IPE';
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.onClick = this.onClick.bind(this);
    }

    enable() {
        if (this.active) return;
        this.active = true;
        window.addEventListener('pointerdown', this.onClick);
        console.log('Beam Tool Enabled');
    }

    disable() {
        if (!this.active) return;
        this.active = false;
        this.points = [];
        window.removeEventListener('pointerdown', this.onClick);
        console.log('Beam Tool Disabled');
    }

    onClick(event) {
        const rect = Engine.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, Engine.camera);
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

        const point = new THREE.Vector3();
        this.raycaster.ray.intersectPlane(plane, point);

        if (!point) return;

        this.points.push(point.clone());

        if (this.points.length === 2) {
            const start = this.points[0];
            const end = this.points[1];
            const section = Sections[this.currentFamily][this.currentSection];

            const beam = createBeamMesh(start, end, section);
            Engine.addBeam(beam);

            console.log('Beam created:', start, end);

            this.points = []; // reset for next beam
        }
    }
}
