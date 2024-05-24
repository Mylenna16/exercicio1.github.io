document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('idNumero').value);
    const resultElement = document.getElementById('idResultado');

    if (Eprimo(numero)) {
        resultElement.textContent = `${numero} é um número primo.`;
    } else {
        resultElement.textContent = `${numero} não é um número primo.`;
    }
});

function Eprimo(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}