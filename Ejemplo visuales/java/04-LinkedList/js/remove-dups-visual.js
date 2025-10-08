// Lista inicial: 1 -> 2 -> 2 -> 3 -> 4 -> 1
let list = [1, 2, 2, 3, 4, 1];
const steps = [];
let currentStep = 0;

// Clonar una lista
const clone = arr => arr.map(x => x);

// Guardar un paso con descripción
function addStep(arr, desc, highlights = {}) {
  steps.push({ arr: clone(arr), desc, highlights });
}

// Simulación del algoritmo RemoveDups
const seen = new Set();
let i = 0;

addStep(list, "Lista original: 1→2→2→3→4→1");

seen.add(list[0]); // agregar primer valor

for (i = 1; i < list.length; i++) {
  const val = list[i];
  if (seen.has(val)) {
    // Eliminar duplicado
    addStep(list, `El valor ${val} ya existe → eliminar nodo duplicado`, { duplicate: i });
    list.splice(i, 1);
    i--; // reajustar índice
  } else {
    seen.add(val);
    addStep(list, `Valor ${val} es nuevo → mantener`, { unique: i });
  }
}

addStep(list, "Lista final sin duplicados ✅");

function renderStep(stepIndex) {
  const step = steps[stepIndex];
  const container = document.getElementById("list");
  container.innerHTML = "";

  step.arr.forEach((val, idx) => {
    const div = document.createElement("div");
    div.classList.add("node", "arrow");

    if (idx === step.highlights?.duplicate) div.classList.add("duplicate");
    if (idx === step.highlights?.unique) div.classList.add("unique");

    div.textContent = val;
    container.appendChild(div);
  });

  // quitar flecha al último
  if (container.lastChild) container.lastChild.classList.remove("arrow");

  document.getElementById("desc").textContent = step.desc;
}

renderStep(currentStep);

document.getElementById("nextStep").addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;
  renderStep(currentStep);
});