function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDiv.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    resultDiv.textContent = `Seu IMC é ${imc}. Classificação: ${classification}`;
}

function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDiv.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    resultDiv.textContent = `Seu IMC é ${imc}. Classificação: ${classification}`;
}

function resetInputs() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
}

function finalize() {
    alert('Obrigado por usar a calculadora de IMC!');
    // Você pode adicionar um redirecionamento aqui, se necessário
    // window.location.href = 'outra_pagina.html';
}

