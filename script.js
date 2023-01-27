const Gameboard = (() => {
  const boardArray = [];
  for (let j = 0; j < 9; j++) {
    boardArray[j] = document.querySelector(`#c${j}`);
  }
  return {
    boardArray,
  };
})();

console.log(Gameboard.boardArray);

const Players = (name) => {
  const count = 0;
  return { count };
};

const formContainer = document.querySelector(".form-container");
const startButton = document.getElementById("start");
const closeButton = document.getElementById("close");
const resultWindow = document.querySelector(".result");

function startGame() {
  formContainer.style.display = "block";
}

function closeForm() {
  formContainer.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  startButton.addEventListener("click", startGame);
  closeButton.addEventListener("click", closeForm);
});

const playButton = document.querySelector("#play");
playButton.addEventListener("click", (e) => {
  Gameboard.boardArray[0].textContent = "";
  Gameboard.boardArray[1].textContent = "";
  Gameboard.boardArray[2].textContent = "";
  Gameboard.boardArray[3].textContent = "";
  Gameboard.boardArray[4].textContent = "";
  Gameboard.boardArray[5].textContent = "";
  Gameboard.boardArray[6].textContent = "";
  Gameboard.boardArray[7].textContent = "";
  Gameboard.boardArray[8].textContent = "";
  resultWindow.textContent = "";
  resultWindow.style.display = "none";

  formContainer.style.display = "none";
  e.preventDefault();

  const player01 = Players(`${document.getElementById("player-1").value}`);
  const player02 = Players(`${document.getElementById("player-2").value}`);
  console.log(`Player01 names is ${document.getElementById("player-1").value}`);
  console.log(`Player02 names is ${document.getElementById("player-2").value}`);

  const gameProccess = (cell) => {
    cell.addEventListener("click", () => {
      if (
        cell.textContent !== "X" &&
        cell.textContent !== "O" &&
        resultWindow.textContent === ""
      ) {
        if (player01.count === player02.count) {
          player01.count++;
          cell.textContent = "X";
          console.log("player01 count=", player01.count);
        } else if (player01.count > player02.count) {
          player02.count++;
          cell.textContent = "O";
          console.log("player02 count=", player02.count);
        }

        const cell01 = Gameboard.boardArray[0].textContent;
        const cell02 = Gameboard.boardArray[1].textContent;
        const cell03 = Gameboard.boardArray[2].textContent;
        const cell04 = Gameboard.boardArray[3].textContent;
        const cell05 = Gameboard.boardArray[4].textContent;
        const cell06 = Gameboard.boardArray[5].textContent;
        const cell07 = Gameboard.boardArray[6].textContent;
        const cell08 = Gameboard.boardArray[7].textContent;
        const cell09 = Gameboard.boardArray[8].textContent;
        if (
          (cell01 === "X" && cell02 === "X" && cell03 === "X") ||
          (cell04 === "X" && cell05 === "X" && cell06 === "X") ||
          (cell07 === "X" && cell08 === "X" && cell09 === "X") ||
          (cell01 === "X" && cell04 === "X" && cell07 === "X") ||
          (cell02 === "X" && cell05 === "X" && cell08 === "X") ||
          (cell03 === "X" && cell06 === "X" && cell09 === "X") ||
          (cell01 === "X" && cell05 === "X" && cell09 === "X") ||
          (cell03 === "X" && cell05 === "X" && cell07 === "X")
        ) {
          resultWindow.style.display = "block";
          resultWindow.textContent = `Player №1 ${
            document.getElementById("player-1").value
          } won!`;
          document.getElementById("player-1").value = "";
          document.getElementById("player-2").value = "";
          player01.count = 0;
          player02.count = 0;
        } else if (
          (cell01 === "O" && cell02 === "O" && cell03 === "O") ||
          (cell04 === "O" && cell05 === "O" && cell06 === "O") ||
          (cell07 === "O" && cell08 === "O" && cell09 === "O") ||
          (cell01 === "O" && cell04 === "O" && cell07 === "O") ||
          (cell02 === "O" && cell05 === "O" && cell08 === "O") ||
          (cell03 === "O" && cell06 === "O" && cell09 === "O") ||
          (cell01 === "O" && cell05 === "O" && cell09 === "O") ||
          (cell03 === "O" && cell05 === "O" && cell07 === "O")
        ) {
          resultWindow.style.display = "block";
          resultWindow.textContent = `Player №2 ${
            document.getElementById("player-2").value
          } won!`;
          document.getElementById("player-1").value = "";
          document.getElementById("player-2").value = "";
          player01.count = 0;
          player02.count = 0;
        } else if (player01.count === 5) {
          resultWindow.style.display = "block";
          resultWindow.textContent = "It's a tie!";
          player01.count = 0;
          player02.count = 0;
        }
      }
    });
  };
  Gameboard.boardArray.map(gameProccess);
});
