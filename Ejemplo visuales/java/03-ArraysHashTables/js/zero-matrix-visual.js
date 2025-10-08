const steps = [];
let currentStep = 0;

let matrix = [
  [2, 1, 3, 0, 2],
  [7, 4, 1, 3, 8],
  [4, 0, 1, 2, 1],
  [9, 3, 4, 1, 9]
];

const rows = matrix.length;
const cols = matrix[0].length;
const container = document.getElementById("matrix");
container.style.gridTemplateColumns = `repeat(${cols}, 60px)`;

function render(matrix, desc = "") {
  container.innerHTML = "";
  matrix.forEach((row, i) => {
    row.forEach((val, j) => {
      const div = document.createElement("div");
      div.className = "cell" + (val === 0 ? " zero" : "");
      div.textContent = val;
      container.appendChild(div);
    });
  });
  document.getElementById("stepDesc").textContent = desc;
}

function clone(m) {
  return m.map(r => [...r]);
}

// Paso 1: detectar ceros en primera fila y columna
const firstRowHasZero = matrix[0].includes(0);
const firstColHasZero = matrix.some(row => row[0] === 0);
steps.push([clone(matrix), "Matriz original"]);

// Paso 2: marcar ceros
for (let i = 1; i < rows; i++) {
  for (let j = 1; j < cols; j++) {
    if (matrix[i][j] === 0) {
      matrix[i][0] = 0;
      matrix[0][j] = 0;
    }
  }
}
steps.push([clone(matrix), "Marcamos en primera fila y columna"]);

// Paso 3: procesar filas
for (let i = 1; i < rows; i++) {
  if (matrix[i][0] === 0) {
    matrix[i] = Array(cols).fill(0);
  }
}
steps.push([clone(matrix), "Procesamos filas con marca 0"]);

// Paso 4: procesar columnas
for (let j = 1; j < cols; j++) {
  if (matrix[0][j] === 0) {
    for (let i = 0; i < rows; i++) {
      matrix[i][j] = 0;
    }
  }
}
steps.push([clone(matrix), "Procesamos columnas con marca 0"]);

// Paso 5: aplicar primera fila y columna si tenían ceros
if (firstRowHasZero) matrix[0] = Array(cols).fill(0);
if (firstColHasZero) for (let i = 0; i < rows; i++) matrix[i][0] = 0;
steps.push([clone(matrix), "Resultado final"]);

render(...steps[0]);

document.getElementById("nextStep").addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;
  render(...steps[currentStep]);
});