```javascript
import * as THREE from 'three';
import { IPE } from '../models/sections.js';


export function createBeam(start, end, type = 'IPE200') {
const section = IPE[type];


const length = start.distanceTo(end);
const geometry = new THREE.BoxGeometry(section.b / 100, section.h / 100, length);
const material = new THREE.MeshStandardMaterial({ color: 0x7777ff });


const beam = new THREE.Mesh(geometry, material);


const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
beam.position.copy(mid);


beam.lookAt(end);


return beam;
}
```
