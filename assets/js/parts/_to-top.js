// =======================================
// トップへ戻るボタン
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const toTopButton = document.querySelector(".c-to-top");

  // スクロール位置に応じて表示・非表示を切り替え
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 300) {
      toTopButton.classList.add("js-show");
    } else {
      toTopButton.classList.remove("js-show");
    }
  });

  // クリックでページトップへ
  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
