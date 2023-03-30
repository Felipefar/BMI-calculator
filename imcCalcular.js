function calcularImc() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = peso / (altura * altura).toFixed(2);

    document.getElementById("imcForm").style.visibility = "hidden";
    document.getElementById("imcResult").style.visibility = "visible";
    document.getElementById("resultado").innerHTML = `Seu IMC é: ${imc} <br> Sua faixa é: ${getFaixaByImcValue(imc)}`;
}

function getFaixaByImcValue(imc) {
    if (imc < 18.5) {
      return "Magro";
    } else if (imc <= 24.9) {
      return "Saudável";
    } else if (imc <= 29.9) {
      return "Sobrepeso";
    } else if (imc <= 34.9) {
      return "Obesidade grau I";
    } else if (imc <= 39.9) {
      return "Obesidade grau II";
    } else {
      return "Obesidade grau III";
    }
}
