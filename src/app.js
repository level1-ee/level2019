import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

const textArticle = document.querySelector(".text-article");
const blockArticle = document.querySelector(".text-article-wrap");

for (var i = 0; i < 94; i++) {
  const cloned = textArticle.cloneNode(true);

  cloned.style.left = i * 15 + "px";
  cloned.style.top = i * 10 + "px";
  cloned.classList.add(`text-article--${i}`);

  blockArticle.appendChild(cloned);
}

const textTop = document.querySelector(".text-top");
const blockTop = document.querySelector(".text-top-wrap");

for (var i = 0; i < 94; i++) {
  const cloned = textTop.cloneNode(true);

  cloned.style.right = i * 25 + "px";
  cloned.style.top = i * 11 + "px";
  cloned.classList.add(`text-top--${i}`);

  blockTop.appendChild(cloned);
}

const textThanks = document.querySelector(".text-thanks");
const blockThanks = document.querySelector(".text-thanks-wrap");

for (var i = 0; i < 94; i++) {
  const cloned = textThanks.cloneNode(true);

  // cloned.style.left = '50%';
  cloned.style.top = i * 14 + "px";
  cloned.classList.add(`text-thanks--${i}`);

  blockThanks.appendChild(cloned);
}

function resetLayout() {
  const blocks = document.querySelectorAll(".block");
  const cols = document.querySelectorAll(".col");

  for (const block of blocks) {
    block.classList.remove("block--active");
  }

  for (const col of cols) {
    col.classList.remove("col--active");
  }
}

const blocks = document.querySelectorAll(".block");

for (const block of blocks) {
  const parentCol = block.parentNode;

  block.addEventListener("click", () => {
    const excludes = ["block--header", "block--video", "block--footer"];
    if (!excludes.some(className => block.classList.contains(className))) {
      resetLayout();
      block.classList.add("block--active");
      parentCol.classList.add("col--active");
    } else {
      resetLayout();
    }
  });
}
