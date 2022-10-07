
function atualizouSelect() {

    let altura = document.querySelector("#altura").value
    let idade = document.querySelector("#idade").value
    let peso = document.querySelector("#peso").value

    let select2 = document.querySelector("#select-2");
    let nivelAtividade = select2.options[select2.selectedIndex];
    let atividade = nivelAtividade.text

    let resultado = document.querySelector('#printResult')
    let resultadoLine2 = document.querySelector('#total')

    let homem = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade);
    let mulher = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)

    let select = document.querySelector("#select");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let text = optionValue.text;

    

        if (text == "Masculino" && atividade == "Sedentário") {
            resultado.innerHTML = "Você precisa consumir " + Math.round(homem) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.2) + " calorias diariamente para se manter saudável";
        }else if (text == "Masculino" && atividade == "Levemente Ativo") {
            resultado.innerHTML = "Você precisa consumir " + Math.round(homem) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.375) + " calorias diariamente para se manter saudável";
        }else if(text == "Masculino" && atividade == "Moderadamente Ativo"){
            resultado.innerHTML = "Você precisa consumir " + Math.round(homem) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.55) + " calorias diariamente para se manter saudável";
        }else if(text == "Masculino" && atividade == "Bastante Ativo"){
            resultado.innerHTML = "Você precisa consumir " + Math.round(homem) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.725) + " calorias diariamente para se manter saudável";
        }else if(text == "Masculino" && atividade == "Muito Ativo"){
            resultado.innerHTML = "Você precisa consumir " + Math.round(homem) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.9) + " calorias diariamente para se manter saudável";
        }else if (text == "Feminino" && atividade == "Sedentário") {
            resultado.innerHTML = "Você precisa consumir " + Math.round(mulher) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.2) + " calorias diariamente para se manter saudável";
        }else if (text == "Feminino" && atividade == "Levemente Ativo") {
            resultado.innerHTML = "Você precisa consumir " + Math.round(mulher) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.375) + " calorias diariamente para se manter saudável";
        }else if (text == "Feminino" && atividade == "Moderadamente Ativo") {
            resultado.innerHTML = "Você precisa consumir " + Math.round(mulher) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.55) + " calorias diariamente para se manter saudável";
        }else if (text == "Feminino" && atividade == "Bastante Ativo") {
            resultado.innerHTML = "Você precisa consumir " + Math.round(mulher) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.725) + " calorias diariamente para se manter saudável";
        }else if (text == "Feminino" && atividade == "Muito Ativo") {
            resultado.innerHTML = "Você precisa consumir " + Math.round(mulher) + " calorias diariamente para manter suas funções vitais";
            resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.9) + " calorias diariamente para se manter saudável";
        }else {
            alert("Gênero ou Nível de Atividade inválidos")
        } 
}






/* if (text == 'Masculino') {
    resultado.innerHTML = "Você precisa consumir " + homem + " calorias diariamente para manter suas funções vitais";
} else if (text == 'Feminino') {
    resultado.innerHTML = "Sua taxa de metabolismo basal é de: " + mulher;
} else {
    alert("Gênero inválido")
} */