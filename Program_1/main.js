function sumCalculate(num1, num2) {
    console.log(num1)
    return num1 + num2;
}

document.getElementById("button").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const ergebnis = sumCalculate(num1, num2);

    console.log("Seltsame Konsole: ", ergebnis)

    document.getElementById('result').innerHTML = 'Ergebnis: ' + ergebnis;
});
