import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.js";

async function loadCoffee() {
  const loader = new GLTFLoader();

  const [mokaPotData, coffeeCupData, coffeeBeanData, coffeeBeanLightData] = await Promise.all([
    loader.loadAsync("/assets/moka_pot/scene.gltf"),
    loader.loadAsync("/assets/coffee_cup_with_plate/scene.gltf"),
    loader.loadAsync("/assets/coffee_bean_low-poly/scene.gltf"),
    loader.loadAsync("/assets/coffee_bean/scene.gltf"),
  ]);

  const mokaPot = setupModel(mokaPotData);
  let mpxyz = 1;
  mokaPot.position.set(-10, 0, 30);
  mokaPot.rotation.set(-1.2, 0.2, 0);
  mokaPot.scale.set(mpxyz, mpxyz, mpxyz);

  const coffeeCup = setupModel(coffeeCupData);
  let ccxyz = 120;
  coffeeCup.position.set(7.5, 0, -25);
  coffeeCup.rotation.set(-1, 0.2, -0.5);
  coffeeCup.scale.set(ccxyz, ccxyz, ccxyz);

  const coffeeBean = setupModel(coffeeBeanData);
  coffeeBean.scale.set(200, 200, 200);

  const coffeeBeanLight = setupModel(coffeeBeanLightData);

  return { mokaPot, coffeeCup, coffeeBean, coffeeBeanLight };
}

export { loadCoffee };
