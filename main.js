import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AnimationClip, NumberKeyframeTrack } from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xa03335 });
const torusKnot = new THREE.Mesh(geometry, material);
// scene.add(torusKnot);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const loader = new GLTFLoader();
const animationActions = THREE.AnimationAction;
// loader.loadAsync(
//   "assets/coffee_bag/scene.gltf",
//   function (gltf) {
//     console.log(gltf);
//     animationActions.push(speen(5, 2));
//     gltf.animations = animationActions;
//     scene.add(gltf.scene);
//     // mixer = new THREE.AnimationMixer(gltf.scene);
//     // gltf.animations.forEach((clip) => {
//     //   mixer.clipAction(clip).play();
//     // });
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   },
// );

async function loadCoffee() {
  const loader = new GLTFLoader();

  const coffeeData = await loader.loadAsync("assets/coffee_bag/scene.gltf");

  console.log("CoffeeBag", coffeeData);

  const coffeeBag = setupModel(coffeeData);

  scene.add(coffeeBag);
}

function setupModel(data) {
  const model = data.scene.children[0];
  return model;
}

function createSpeen() {
  const positionKF = new THREE.VectorKeyframeTrack(".position", [0, 3, 6], [0, 0, 0, 2, 2, 2, 0, 0, 0]);

  const opacityKF = new THREE.NumberKeyframeTrack(".material.opacity", [0, 1, 2, 3, 4, 5, 6], [0, 1, 0, 1, 0, 1, 0]);

  const moveBlinkClip = new THREE.AnimationClip("move-n-blink", -1, [positionKF, opacityKF]);

  const mesh = new THREE.Mesh();
  const mixer = new THREE.AnimationMixer(mesh);
  const clock = new THREE.Clock();
  const action = mixer.clipAction(moveBlinkClip);

  const delta = clock.getDelta();
  mixer.update(delta);
  mesh.tick = (delta) => mixer.update(delta);
  updatables.push(mesh);
}

function speen(period, axis) {
  const times = [0, period],
    values = [0, 360];

  const trackName = ".rotation[" + axis + "]";

  const track = new NumberKeyframeTrack(trackName, times, values);

  return new AnimationClip(null, period, [track]);
}

function animate() {
  requestAnimationFrame(animate);

  // torusKnot.rotation.x += 0.01;
  // torusKnot.rotation.y += 0.005;
  // torusKnot.rotation.z += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

loadCoffee();
animate();
