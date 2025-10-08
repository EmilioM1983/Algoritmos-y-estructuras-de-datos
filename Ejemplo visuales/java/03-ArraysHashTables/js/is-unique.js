function checkUnique() {
      const text = document.getElementById("inputText").value.trim();
      const visualization = document.getElementById("visualization");
      const result = document.getElementById("result");
      visualization.innerHTML = "";
      result.textContent = "";

      const seen = new Set();
      let isUnique = true;

      [...text].forEach((char, i) => {
        const box = document.createElement("div");
        box.textContent = char;
        box.classList.add("char-box");

        if (seen.has(char)) {
          box.classList.add("repeated");
          isUnique = false;
        } else {
          seen.add(char);
          box.classList.add("new");
        }

        setTimeout(() => visualization.appendChild(box), i * 200);
      });

      setTimeout(() => {
        result.textContent = isUnique
          ? "✅ Todos los caracteres son únicos"
          : "❌ Se detectaron caracteres repetidos";
        result.style.color = isUnique ? "#3fb950" : "#f85149";
      }, text.length * 200 + 300);
    }