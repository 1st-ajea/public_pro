document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("drawBtn");
  button.addEventListener("click", generateLotto);
});

function generateLotto() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // 초기화

  for (let i = 0; i < 5; i++) {
    let numbers = [];
    while (numbers.length < 6) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    numbers.sort((a, b) => a - b);
    const gameDiv = document.createElement("div");
    gameDiv.className = "lotto-game";
    gameDiv.textContent = `게임 ${i + 1}: ${numbers.join(", ")}`;
    resultsDiv.appendChild(gameDiv);
  }
}