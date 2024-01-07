const player_result = document.querySelector("#player_result");
const computer_result = document.querySelector("#computer_result");
const rock = document.querySelector(".fa-hand-back-fist");
const paper = document.querySelector(".fa-hand");
const scissors = document.querySelector(".fa-hand-scissors");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const elements_box = document.querySelector(".elements_box");
let playerChoice = "";
let player_number = 0;
let computer_number = 0;

function getComputerChoice() {
  let computer_random = Math.ceil((Math.random() * 100000) % 3);
  if (computer_random == 1) {
    return "rock";
  } else if (computer_random == 2) {
    return "paper";
  } else if (computer_random == 3) {
    return "scissors";
  }
}

rock.addEventListener("click", function () {
  playerChoice = "rock";
  let winner = getWinner(playerChoice, getComputerChoice());
  increasWinner(winner);
  showModal(getComputerChoice(), winner);
});
paper.addEventListener("click", function () {
  playerChoice = "paper";
  let winner = getWinner(playerChoice, getComputerChoice());
  increasWinner(winner);
  showModal(getComputerChoice(), winner);
});
scissors.addEventListener("click", function () {
  playerChoice = "scissors";
  let winner = getWinner(playerChoice, getComputerChoice());
  increasWinner(winner);
  showModal(getComputerChoice(), winner);
});

function getWinner(player, computer) {
  if (computer === player) {
    return "draw";
  } else if (computer == "rock") {
    if (player == "paper") {
      return "player";
    } else if (player == "scissors") {
      return "computer";
    }
  } else if (computer == "paper") {
    if (player == "scissors") {
      return "player";
    } else if (player == "rock") {
      return "computer";
    }
  } else if (computer == "scissors") {
    if (player == "rock") {
      return "player";
    } else if (player == "paper") {
      return "computer";
    }
  }
}

function increasWinner(winner) {
  console.log(winner);
  if (winner == "player") {
    player_number++;
    player_result.textContent = player_number;
  } else if (winner == "computer") {
    computer_number++;
    computer_result.textContent = computer_number;
  } else if ((winner = "draw")) {
    player_result.textContent = player_number;
    computer_result.textContent = computer_number;
  }
}

function showModal(computerShape, showWinner) {
  let el_modal = document.querySelector(".el_modal");
  let modal_title = document.querySelector(".modal__title");
  let res_chose_computer = document.querySelector("#res_chose_computer");

  if (computerShape == "rock") {
    el_modal.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    res_chose_computer.textContent = computerShape;
  } else if (computerShape == "paper") {
    el_modal.innerHTML = `<i class="fa-solid fa-hand"></i>`;
    res_chose_computer.textContent = computerShape;
  } else if (computerShape == "scissors") {
    el_modal.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
    res_chose_computer.textContent = computerShape;
  }

  if (showWinner == "player") {
    modal_title.textContent = "you win";
    modal_title.style.color = "green";
  } else if (showWinner == "computer") {
    modal_title.textContent = "you lose";
    modal_title.style.color = "red";
  } else if (showWinner == "draw") {
    modal_title.textContent = "draw";
    modal_title.style.color = "#f1c232";
  }

  overlay.classList.add("show_overlay");
  modal.classList.add("show_modal");
  elements_box.classList.add(".active_element_box");
  overlay.style.zIndex = 1;
}

function closeModal() {
  overlay.classList.remove("show_overlay");
  modal.classList.remove("show_modal");
  elements_box.classList.remove(".active_element_box");
  overlay.style.zIndex = -1;
}

overlay.addEventListener("click", function () {
  closeModal();
});
