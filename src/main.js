import { gameConfig } from "./gameConfig.js";

function boot() {
  //Unity entry point
  console.log(`Starting ${gameConfig.title} v${gameConfig.version}`);
  console.log(`Canvas size: ${gameConfig.width}x${gameConfig.height}`);
  console.log(`Background: ${gameConfig.backgroundColor}`);

  return true;
}

boot();
