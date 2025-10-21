const original = [1, 2, 4, 6, 8];
let currentStep = 0;

// Simulación paso a paso del intercambio
const steps = [
  {desc: "Paso 1: Intercambiar (1, 2)", result: [2, 1, 4, 6, 8], active: [0, 1]},
  {desc: "Paso 2: Intercambiar (4, 6)", result: [2, 1, 6, 4, 8], active: [2, 3]},
  {desc: "Paso 3: El nodo 8 queda sin pareja (no se intercambia)", result: [2, 1, 6, 4, 8], active: [4]}
];

function renderList(containerId, list, activeIndices = []) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  list.forEach((v, i) => {
    const div = document.createElement("div");
    div.className = "node" + (activeIndices.includes(i) ? " active" : "");
    div.textContent = v;
    container.appendChild(div);
    if (i < list.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "→";
      container.appendChild(arrow);
    }
  });
}

renderList("originalList", original);
renderList("swappedList", steps[0].result);
document.getElementById("desc").textContent = steps[0].desc;

document.getElementById("nextStep").addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;
  const step = steps[currentStep];
  renderList("swappedList", step.result, step.active);
  document.getElementById("desc").textContent = step.desc;
});