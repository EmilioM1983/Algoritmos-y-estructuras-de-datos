const list = [1, 2, 4, 6];
const n = 2;

let p1Index = 0;
let p2Index = 0;

const steps = [
  { desc: "Inicio: p1 y p2 en el head", p1: 0, p2: 0 },
  { desc: "Mover p1 1 paso", p1: 1, p2: 0 },
  { desc: "Mover p1 2 pasos", p1: 2, p2: 0 },
  { desc: "Mover ambos hasta que p1 llegue al final: p1→6, p2→2", p1: 3, p2: 1 },
  { desc: "p1 llega al final, p2 está en el nodo n-ésimo desde el final (4)", p1: 4, p2: 2 },
];

let step = 0;
const el = document.getElementById("list");
const desc = document.getElementById("desc");

function render() {
  el.innerHTML = "";
  list.forEach((v, i) => {
    const div = document.createElement("div");
    div.className = "node";
    if (i === steps[step].p1) div.classList.add("p1");
    if (i === steps[step].p2) div.classList.add("p2");
    div.textContent = v;
    el.appendChild(div);
    if (i < list.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "→";
      el.appendChild(arrow);
    }
  });
  desc.textContent = steps[step].desc;
}

render();

document.getElementById("nextStep").addEventListener("click", () => {
  step = (step + 1) % steps.length;
  render();
});