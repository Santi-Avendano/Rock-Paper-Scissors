function getComputerChoice() {
    let value = Math.random()
    if (value <= 0.33) {
        let choice = 'Paper';
        return choice;
    }
    else (value <= 0.66) ? choice = 'Rock' : choice = 'Scissors';
    
    return choice;

}


function getHumanChoice() {
    let eleccion = prompt('Choose rock, paper or scissors')
    return eleccion
}


let eleccion = getComputerChoice();
let eleccionHumano = getHumanChoice();

console.log(eleccion);
console.log(eleccionHumano);