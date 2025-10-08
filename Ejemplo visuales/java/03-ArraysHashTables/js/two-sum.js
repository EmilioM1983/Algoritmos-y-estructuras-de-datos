const nums = [2, 11, 7, 15];
const target = 9;

let complementMap = new Map();
let steps = [];
let found = null;

// Simulamos el algoritmo
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if (complementMap.has(n)) {
    found = [complementMap.get(n), i];
    steps.push({
      index: i,
      map: new Map(complementMap),
      action: `Encontrado: nums[${complementMap.get(n)}] + nums[${i}] = ${target}`,
      found: found
    });
    break;
  } else {
    const complement = target - n;
    complementMap.set(complement, i);
    steps.push({
      index: i,
      map: new Map(complementMap),
      action: `Guardamos complemento (${complement}) para ${n}`,
      found: null
    });
  }
}

// Render inicial
const arrayDiv = document.getElementById("array");
const mapDiv = document.getElementById("map");
const desc = document.getElementById("desc");
let stepIndex = 0;

function renderStep(data) {
  arrayDiv.innerHTML = "";
  mapDiv.innerHTML = "<b>Mapa de complementos:</b><br>";
  nums.forEach((num, i) => {
    const div = document.createElement("div");
    div.className = "num";
    div.textContent = num;
    if (data.found && data.found.includes(i)) div.classList.add("found");
    else if (i === data.index) div.classList.add("highlight");
    arrayDiv.appendChild(div);
  });
  data.map.forEach((idx, key) => {
    mapDiv.innerHTML += `${key} → índice ${idx}<br>`;
  });
  desc.textContent = data.action;
}

renderStep(steps[0]);

document.getElementById("nextStep").addEventListener("click", () => {
  stepIndex = (stepIndex + 1) % steps.length;
  renderStep(steps[stepIndex]);
});