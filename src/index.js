"use strict"

// const THREE = require("three")
import * as THREE from 'three'
// import * as THREE from 'js/three.module.js'


const container = document.querySelector(".cells");

// Setup a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

//Setup a camera
const fov = 35;  //field of view
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; //near field clipping palne
const far = 11 //far field clipping plane

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

//Create a geometry
const geometry = new THREE.BoxBufferGeometry(2,2,2);

//create a material
const material = new THREE.MeshBasicMaterial();

//create a mesh containing geomtry and mesh
const mesh = new THREE.Mesh(geometry, material);

//Add mesh to scene
scene.add(mesh);

//Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio) //make sure it displays well on smaller device

//add canvas to automatically created canvas to the page
container.appendChild(renderer.domElement);

//render or create a still image of the scene
renderer.render(scene, camera);





