const words = ["saco", "arresto", "programa", "rastreo", "caso"];
let step = 0;

const container = document.getElementById("container");
const desc = document.getElementById("desc");

// 🔹 Función hash como en el algoritmo Java
function getAnagramHash(word) {
  const count = Array(26).fill(0);
  for (const c of word) {
    const idx = c.charCodeAt(0) - 97;
    count[idx]++;
  }
  return JSON.stringify(count);
}

// 🔹 Agrupamos paso a paso
let map = new Map();
const steps = [];

for (const w of words) {
  const hash = getAnagramHash(w);
  if (!map.has(hash)) {
    map.set(hash, []);
  }
  map.get(hash).push(w);
  // Snapshot para la animación
  steps.push({
    current: w,
    hash,
    snapshot: new Map(map)
  });
}

function renderStep(data) {
  container.innerHTML = "";
  const { current, hash, snapshot } = data;

  snapshot.forEach((group, h) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "group";
    group.forEach(w => {
      const wordDiv = document.createElement("div");
      wordDiv.className = "word";
      wordDiv.textContent = w;
      if (w === current) wordDiv.classList.add("highlight");
      groupDiv.appendChild(wordDiv);
    });
    container.appendChild(groupDiv);
  });

  desc.textContent = `Palabra actual: "${current}" → hash: ${hash}`;
}

renderStep(steps[0]);

document.getElementById("nextStep").addEventListener("click", () => {
  step = (step + 1) % steps.length;
  renderStep(steps[step]);
});