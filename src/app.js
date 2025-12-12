// SteelModel Lite - Expanded Engine (Option B)
// This file initializes the 3D engine with scene, camera, controls,
// helpers, lighting, resize handler, and exports a global engine object.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const Engine = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    beams: [],

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x111111);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.1,
            5000
        );
        this.camera.position.set(6, 6, 12);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.1;

        // Helpers
        const grid = new THREE.GridHelper(50, 50);
        this.scene.add(grid);

        const axes = new THREE.AxesHelper(5);
        this.scene.add(axes);

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1.2);
        light.position.set(10, 20, 10);
        this.scene.add(light);

        const ambient = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambient);

        // Events
        window.addEventListener('resize', this.resize.bind(this));

        // Start render loop
        this.animate();

        console.log("Engine initialized");
    },

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    },

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    },

    addBeam(beamMesh) {
        this.scene.add(beamMesh);
        this.beams.push(beamMesh);
    }
};

// Auto-start engine
document.addEventListener('DOMContentLoaded', () => {
    Engine.init();
});
