const userNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;

if (pcNumber > userNumber){
    alert(`
    Ha vinto il computer, poichè:
    numero utente: ${userNumber};
    numero computer: ${pcNumber}`)
} else if (userNumber > pcNumber){
    alert(`
    Ha vinto l'utente, poichè:
    numero utente: ${userNumber};
    numero computer: ${pcNumber}`)
} else {
    alert (`
    E' un pareggio, poichè:
    numero utente: ${userNumber};
    numero computer: ${pcNumber}`)
}