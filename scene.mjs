import * as THREE from "three";
import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry.js";

const scene = new THREE.Scene();
const light1 = new THREE.PointLight(0xffffff);
light1.position.set(500, 500, 500);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 0.25);
light2.position.set(-500, -500, -500);
scene.add(light2);

const wireframeMaterial = new THREE.MeshLambertMaterial({
  wireframe: !true,
  color: 0x9900ee,
});
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xe0e0e0 });

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(200, 20, 10),
  wireframeMaterial,
);
scene.add(sphere);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(400, 400),
  wireframeMaterial,
);
plane.position.y = -200;
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// const teapot = require("./teapot");
// scene.add(teapot);

const geometry = new THREE.BoxGeometry(200, 200, 200);
// for (const i = 0; i < geometry.parameters.faces.length; i += 2) {
//   const hex = Math.random() * 0xffffff;
//   geometry.faces[i].color.setHex(hex);
//   geometry.faces[i + 1].color.setHex(hex);
// }
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 150;
scene.add(cube);

const objects = [cube, sphere];

export { cube, objects, scene, sphere };

