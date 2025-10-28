const first = document.getElementById('firstStack');
    const second = document.getElementById('secondStack');
    let counter = 1;

    function createBlock(val) {
      const div = document.createElement('div');
      div.className = 'block';
      div.textContent = val;
      return div;
    }

    function add() {
      // Agrega un bloque nuevo al top visual de firstStack
      const block = createBlock(counter++);
      first.appendChild(block);
    }

    async function transfer() {
      // Mueve del tope visual de first al tope de second
      // (usando lastElementChild debido a column-reverse)
      while (first.lastElementChild && !first.lastElementChild.tagName.startsWith('H3')) {
        const node = first.lastElementChild;
        animateTransfer(node, first, second);
        await delay(500);
      }
    }

    function delay(ms) {
      return new Promise(res => setTimeout(res, ms));
    }

    function animateTransfer(node, from, to) {
      const clone = node.cloneNode(true);
      const fromRect = node.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const animNode = clone;
      animNode.style.position = 'fixed';
      animNode.style.left = fromRect.left + 'px';
      animNode.style.top = fromRect.top + 'px';
      animNode.style.zIndex = 1000;
      document.body.appendChild(animNode);
      node.remove();

      requestAnimationFrame(() => {
        animNode.style.left = toRect.left + 40 + 'px';
        animNode.style.top = toRect.top + 80 + 'px';
        animNode.style.transform = 'scale(0.9)';
        animNode.style.opacity = '0.8';
      });

      setTimeout(() => {
        animNode.remove();
        to.appendChild(clone);
      }, 450);
    }

    async function remove() {
      await transfer();
      const node = second.lastElementChild;
      if (node && !node.tagName.startsWith('H3')) {
        node.remove();
      }
    }

    async function peek() {
      await transfer();
      const node = second.lastElementChild;
      if (node && !node.tagName.startsWith('H3')) {
        node.style.background = '#fbbf24';
        setTimeout(() => { node.style.background = '#38bdf8'; }, 1000);
      }
    }