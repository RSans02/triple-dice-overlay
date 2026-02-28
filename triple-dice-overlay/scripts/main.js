Hooks.once("init", () => {
  console.log("Triple Dice Overlay | Init");
});

Hooks.on("ready", () => {
  console.log("Triple Dice Overlay | Ready");
  // Solo un test: overlay de prueba
  let overlay = document.createElement("div");
  overlay.id = "overlay-test";
  overlay.style.position = "fixed";
  overlay.style.top = "50px";
  overlay.style.left = "50%";
  overlay.style.transform = "translateX(-50%)";
  overlay.style.background = "rgba(0,0,0,0.8)";
  overlay.style.color = "white";
  overlay.style.padding = "10px 20px";
  overlay.style.borderRadius = "10px";
  overlay.style.zIndex = "10000";
  overlay.innerText = "Overlay de prueba";
  document.body.appendChild(overlay);
});