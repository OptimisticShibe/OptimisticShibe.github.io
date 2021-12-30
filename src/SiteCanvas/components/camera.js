import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera.position.set(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.setZ(30);
  camera.position.setX(-3);

  return camera;
}

export { createCamera };
