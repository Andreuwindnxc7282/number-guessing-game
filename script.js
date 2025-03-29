let randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    attempts++;

    if (userGuess < randomNumber) {
        document.getElementById("result").textContent = "El número es mayor. Intentos: " + attempts;
    } else if (userGuess > randomNumber) {
        document.getElementById("result").textContent = "El número es menor. Intentos: " + attempts;
    } else {
        document.getElementById("result").textContent = ¡Felicidades! Adivinaste el número en ${attempts} intentos.;
    }
}