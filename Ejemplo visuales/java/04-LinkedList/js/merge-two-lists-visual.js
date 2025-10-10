const list1 = [1, 2, 4, 6];
const list2 = [2, 3, 5];
let merged = [];

const steps = [
  { desc: "Inicio de la fusión", l1: [...list1], l2: [...list2], merged: [] },
  { desc: "1 ≤ 2 → agregamos 1", l1: [2,4,6], l2: [2,3,5], merged: [1] },
  { desc: "2 ≤ 2 → agregamos 2 (de list1)", l1: [4,6], l2: [2,3,5], merged: [1,2] },
  { desc: "4 > 2 → agregamos 2 (de list2)", l1: [4,6], l2: [3,5], merged: [1,2,2] },
  { desc: "4 > 3 → agregamos 3", l1: [4,6], l2: [5], merged: [1,2,2,3] },
  { desc: "4 ≤ 5 → agregamos 4", l1: [6], l2: [5], merged: [1,2,2,3,4] },
  { desc: "6 > 5 → agregamos 5", l1: [6], l2: [], merged: [1,2,2,3,4,5] },
  { desc: "List2 vacía → anexamos el resto de list1 (6)", l1: [], l2: [], merged: [1,2,2,3,4,5,6] },
];

let step = 0;
const el1 = document.getElementById("list1");
const el2 = document.getElementById("list2");
const elM = document.getElementById("merged");
const desc = document.getElementById("desc");

function render(s) {
  el1.innerHTML = renderList(s.l1, "list1");
  el2.innerHTML = renderList(s.l2, "list2");
  elM.innerHTML = renderList(s.merged, "merged");
  desc.textContent = s.desc;
}
function renderList(arr, type) {
  if (!arr.length) return "<span style='color:#64748b;'>null</span>";
  return arr.map(v => `<div class="node ${type==='merged'?'merged':''}">${v}</div><span class="arrow">→</span>`).join("").slice(0, -29);
}
render(steps[0]);

document.getElementById("nextStep").addEventListener("click", () => {
  step = (step + 1) % steps.length;
  render(steps[step]);
});