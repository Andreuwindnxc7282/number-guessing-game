// Genera un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const feedback = document.getElementById('feedback');

    if (userGuess == randomNumber) {
        feedback.textContent = '¡Felicidades! Adivinaste el número.';
        feedback.style.color = 'green';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'El número es mayor, ¡intenta de nuevo!';
        feedback.style.color = 'red';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'El número es menor, ¡intenta de nuevo!';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Por favor, introduce un número.';
        feedback.style.color = 'black';
    }
}