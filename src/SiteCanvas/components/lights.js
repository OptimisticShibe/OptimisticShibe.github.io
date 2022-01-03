import { PointLight } from "three";
import { PointLightHelper } from "three";
import { AmbientLight } from "three";
import { DirectionalLight, HemisphereLight } from "three";

async function createLights() {
  // const ambientLight = new HemisphereLight("white", "darkslategrey", 2);
  const ambientLight = new AmbientLight("white", 3);

  const latteLight = new PointLight("white", 30);
  latteLight.position.set(30,30,-40);
  const lightHelper = new PointLightHelper(latteLight);
  const coffeeTableCatLight = new PointLight("white", 20);
  coffeeTableCatLight.position.set(-5, 5, 30);
  // mainLight.position.set(10, 10, 10);

  return { ambientLight, latteLight, lightHelper, coffeeTableCatLight };
}

export { createLights };
