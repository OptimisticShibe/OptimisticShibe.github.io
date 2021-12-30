import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true, canvas: document.querySelector("#bg") });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
