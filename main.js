import { SiteCanvas } from "./src/SiteCanvas/SiteCanvas.js";

async function main() {
  const siteCanvas = new SiteCanvas();
  await siteCanvas.init();
  siteCanvas.start();
  await siteCanvas.scrollAnim();
}

main().catch((err) => {
  console.error(err);
});
