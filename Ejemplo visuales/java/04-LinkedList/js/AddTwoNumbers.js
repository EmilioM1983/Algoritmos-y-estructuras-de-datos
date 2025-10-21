const list1 = [1, 2, 4];  // representa 421
const list2 = [5, 2, 8];  // representa 825
const result = [];
const steps = [];

let carry = 0;

// Simulamos las sumas paso a paso:
for (let i = 0; i < Math.max(list1.length, list2.length); i++) {
  const d1 = list1[i] ?? 0;
  const d2 = list2[i] ?? 0;
  const sum = d1 + d2 + carry;
  const digit = sum % 10;
  carry = Math.floor(sum / 10);
  result.push(digit);
  steps.push({i, d1, d2, sum, digit, carry});
}
if (carry > 0) {
  result.push(carry);
  steps.push({i: result.length - 1, d1: 0, d2: 0, sum: carry, digit: carry, carry: 0});
}

let step = 0;

function renderList(containerId, list, highlightIndex = -1) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  list.forEach((v, i) => {
    const div = document.createElement("div");
    div.className = "node" + (i === highlightIndex ? " active" : "");
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

function render() {
  const s = steps[step];
  renderList("list1", list1, s.i);
  renderList("list2", list2, s.i);
  renderList("resultList", result.slice(0, step + 1));
  document.getElementById("desc").innerHTML =
    `Paso ${step + 1}: ${s.d1} + ${s.d2} + carry ${s.carry > 0 ? "(acarreo previo)" : ""} = ${s.sum} → guardo ${s.digit}${s.carry > 0 ? ", carry=${s.carry}" : ""}`;
}

render();

document.getElementById("nextStep").addEventListener("click", () => {
  step = (step + 1) % steps.length;
  render();
});