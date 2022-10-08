
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
    let info =  document.querySelector("#info")
    let sedentarioInfo = ("Sedentário - Pouco ou nenhum exercício")
    let levementeAtivoInfo = ("Levemente Ativo - Exercício leve – de 1 a 3 dias por semana")
    let moderadamenteAtivoInfo =("Moderadamente Ativo - Exercício moderado – de 3 a 5 dias por semana")
    let bastanteAtivoInfo = ("Bastante Ativo - Exercício pesado – de 6 a 7 dias por semana")
    let muitoAtivoInfo = ("Muito Ativo - Exercícios pesados diários ou treinos 2x ao dia")

        if (text == "Masculino" && atividade == "Sedentário") {
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(homem) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.2) + " calorias diariamente para se manter saudável";               
            }else if (text == "Masculino" && atividade == "Levemente Ativo") {
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(homem) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.375) + " calorias diariamente para se manter saudável";                
            }else if(text == "Masculino" && atividade == "Moderadamente Ativo"){
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(homem) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.55) + " calorias diariamente para se manter saudável";                
            }else if(text == "Masculino" && atividade == "Bastante Ativo"){
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(homem) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.725) + " calorias diariamente para se manter saudável";               
            }else if(text == "Masculino" && atividade == "Muito Ativo"){
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(homem) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(homem * 1.9) + " calorias diariamente para se manter saudável";                
            }else if (text == "Feminino" && atividade == "Sedentário") {
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(mulher) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.2) + " calorias diariamente para se manter saudável";               
            }else if (text == "Feminino" && atividade == "Levemente Ativo") {
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(mulher) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.375) + " calorias diariamente para se manter saudável";               
            }else if (text == "Feminino" && atividade == "Moderadamente Ativo") {
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(mulher) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.55) + " calorias diariamente para se manter saudável";              
            }else if (text == "Feminino" && atividade == "Bastante Ativo") {
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(mulher) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.725) + " calorias diariamente para se manter saudável";                
            }else if (text == "Feminino" && atividade == "Muito Ativo") {
                resultado.innerHTML = "Sua taxa metabólica basal é de: " + Math.round(mulher) + " calorias";
                resultadoLine2.innerHTML = "Você precisa consumir " + Math.round(mulher * 1.9) + " calorias diariamente para se manter saudável";
            }else {
                alert("Gênero ou Nível de Atividade inválidos");
            } 
}