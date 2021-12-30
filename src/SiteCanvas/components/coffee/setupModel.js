import { AnimationMixer } from "three";

function setupModel(data) {
  const model = data.scene.children[0];
  if (data.animations.length > 0) {
    const clip = data.animations[0];

    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.play();

    model.tick = (delta) => mixer.update(delta);

    return model;
  } else {
    const mixer = new AnimationMixer(model);
    model.tick = (delta) => mixer.update(delta);
    return model;
  }
}

export { setupModel };
