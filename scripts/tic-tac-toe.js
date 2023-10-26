const cells = document.querySelectorAll(".cell");
      const gameInfo = document.querySelector(".gameInfo");
      const restartButton = document.querySelector(".restartButton");

      const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      let cellOption = ["", "", "", "", "", "", "", "", ""];
      let currentPlayer = "X";
      let running = false;

      startGame();

      function startGame() {
        cells.forEach((cell, index) => {
          cell.addEventListener("click", () => {
            cellClicked(cell, index);
          });
        });

        restartButton.addEventListener("click", () => restartGame());
        gameInfo.innerHTML = `${currentPlayer} 's turn`;
        running = true;
      }

      function cellClicked(cell, index) {
        if (cellOption[index] !== "" || !running) {
          return;
        }
        cell.innerHTML = currentPlayer;
        cellOption[index] = currentPlayer;

        checkWinner();
      }

      function changePlayer() {
        if (currentPlayer === "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }

        gameInfo.innerHTML = `${currentPlayer} 's turn`;
      }

      function checkWinner() {
        roundWon = false;

        for (let i = 0; i < winCondition.length; i++) {
          const condition = winCondition[i];

          cellA = cellOption[condition[0]];
          cellB = cellOption[condition[1]];
          cellC = cellOption[condition[2]];

          if (cellA === "" || cellB === "" || cellC === "") {
            continue;
          }
          if (cellA === cellB && cellC === cellB) {
            roundWon = true;
          }
        }

        if (roundWon) {
          gameInfo.innerHTML = `${currentPlayer} Wins!!`;
          running = false;
        } else if (!cellOption.includes("")) {
          gameInfo.innerHTML = `Its a Draw`;
          running = false;
        } else {
          changePlayer();
        }
      }

      function restartGame() {
        cells.forEach((cell) => {
          cell.innerHTML = "";
        });
        cellOption = ["", "", "", "", "", "", "", "", ""];
        startGame();
      }