import { AnimationClip, NumberKeyframeTrack, VectorKeyframeTrack, Mesh, AnimationMixer } from "three";

const positionKF = new VectorKeyframeTrack(".position", [0, 3, 6], [0, 0, 0, 2, 2, 2, 0, 0, 0]);

const opacityKF = new NumberKeyframeTrack(".material.opacity", [0, 1, 2, 3, 4, 5, 6], [0, 1, 0, 1, 0, 1, 0]);

const moveBlinkClip = new AnimationClip("move-n-blink", -1, [positionKF, opacityKF]);

// create a normal, static mesh
const mesh = new Mesh();

// turn it into an animated mesh by connecting it to a mixer
const mixer = new AnimationMixer(mesh);

const action = mixer.clipAction(moveBlinkClip);

action.play();
