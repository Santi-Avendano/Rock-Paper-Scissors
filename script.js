function getComputerChoice() {
    let value = Math.random();
    let choice;

    if (value <= 0.33) {
        choice = 'Paper';
    } else if (value <= 0.66) {
        choice = 'Rock';
    } else {
        choice = 'Scissors';
    }

    return choice;
}

function getHumanChoice() {
    let eleccion;

    while (true) {
        eleccion = prompt('Write 1 for rock, 2 for paper, or 3 for scissors');

        // Salir si el usuario cancela el prompt
        if (eleccion === null) {
            alert("Game canceled.");
            return null;
        }

        if (eleccion === "1" || eleccion === "2" || eleccion === "3") {
            eleccion = eleccion === '1' ? "Rock" : eleccion === '2' ? 'Paper' : 'Scissors';
            break;
        } else {
            alert("Invalid input. Please enter 1 for rock, 2 for paper, or 3 for scissors.");
        }
    }

    return eleccion;
}

function getWinner(hChoice, comChoice) {
    const rules = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper',
    };

    if (hChoice === comChoice) {
        return 'tie';
    }
    return rules[hChoice] === comChoice ? 'human' : 'computer';
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 3 && computerScore < 3) {
        let hChoice = getHumanChoice();

        // Salir del juego si el humano cancela el prompt
        if (hChoice === null) {
            return;
        }

        let comChoice = getComputerChoice();

        console.log('Human chose:', hChoice);
        console.log('CPU chose:', comChoice);

        let winner = getWinner(hChoice, comChoice);

        if (winner === 'tie') {
            alert("It's a tie!!");
        } else if (winner === 'human') {
            alert(`You win this round! ${hChoice} beats ${comChoice}.`);
            humanScore += 1;
        } else {
            alert(`The CPU wins this round! ${comChoice} beats ${hChoice}.`);
            computerScore += 1;
        }

        console.log('Human Score:', humanScore);
        console.log('CPU Score:', computerScore);
    }

    if (humanScore === 3) {
        alert('YOU WIN THE GAME');
    } else {
        alert('YOU LOSE THE GAME');
    }
}

playGame();
