// =======================================
// fade in
// =======================================
gsap.registerPlugin(ScrollTrigger);

const timeDelay = 250; // 時間差のタイミング(ミリ秒)
const maxItemNumber = 3; // 時間差で発火させる最大要素数

for (let i = 0; i < maxItemNumber; i++) {
  const fadeInItems = document.querySelectorAll(`.c-animated__fadeIn.--delay${i}`);
  fadeInFunction(fadeInItems, i * timeDelay);
}

function fadeInFunction(fadeInItems, timeout) {
  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 70%",
      onEnter: () => {
        setTimeout(() => {
          item.classList.add("js-show");
        }, timeout);
      },
    });
  });
}
