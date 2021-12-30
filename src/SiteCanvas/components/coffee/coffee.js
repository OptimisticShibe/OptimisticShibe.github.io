import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.js";

async function loadCoffee() {
  const loader = new GLTFLoader();

  const [coffeeBagData, coffeeCupLateData, coffeeBeanData, coffeeBeanLightData] = await Promise.all([
    loader.loadAsync("/assets/coffee_bag/scene.gltf"),
    loader.loadAsync("/assets/coffee_late_cup/scene.gltf"),
    loader.loadAsync("/assets/coffee_bean_low-poly/scene.gltf"),
    loader.loadAsync("/assets/coffee_bean/scene.gltf"),
  ]);

  const coffeeBag = setupModel(coffeeBagData);
  coffeeBag.position.set(-10, 0, 30);

  const coffeeCupLate = setupModel(coffeeCupLateData);
  coffeeCupLate.position.set(7.5, 0, -10);
  // coffeeCupLate.quaternion.set(0, 0, 2, 0);
  coffeeCupLate.rotation.set(-1.4, 0.7, 1.2);
  coffeeCupLate.scale.set(2, 2, 2);

  const coffeeBean = setupModel(coffeeBeanData);
  coffeeBean.scale.set(200, 200, 200);

  const coffeeBeanLight = setupModel(coffeeBeanLightData);

  return { coffeeBag, coffeeCupLate, coffeeBean, coffeeBeanLight };
}

export { loadCoffee };
