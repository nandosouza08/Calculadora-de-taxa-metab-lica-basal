
function atualizouSelect() {

    let altura = document.querySelector("#altura").value
    let idade = document.querySelector("#idade").value
    let peso = document.querySelector("#peso").value

    let resultado = document.querySelector('#printResult')

    let homem = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade);
    let mulher = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)

    let select = document.querySelector("#select");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let text = optionValue.text;

    if (text == 'Masculino') {
        resultado.innerHTML = "Você precisa consumir " + homem + " calorias diariamente para manter suas funções vitais";
    } else if (text == 'Feminino') {
        resultado.innerHTML = "Sua taxa de metabolismo basal é de: " + mulher;
    } else {
        alert("Gênero inválido")
    }

}






