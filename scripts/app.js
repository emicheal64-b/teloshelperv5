import { Alt1Core } from "./core/alt1core.js";
import { Permissions } from "./core/permissions.js";
import { UI } from "./ui/ui.js";
import { Engine } from "./logic/engine.js";

window.onload = () => {
  if (!Alt1Core.init()) return;

  Permissions.checkAll();
  UI.init();
  Engine.init();

  console.log("Telos Pro V5 Helper initialized");
};