//Variáveis para interação do usuário com a interface.
const { stdin, stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: stdin,
    output: stdout
}); 
//Primeira interação. 
console.log("Digite uma senha que tenha pelo menos 8 caracteres, Letras Maiusculas e Minusculas, Número, Caractere especial."); 
//Questionamento ao Usuário e ultilização de Arrow Function. 
rl.question('Digite sua senha aqui para verificar se é válida :', senha => {  
    const LetraMaiuscula = /[A-Z]/.test(senha); 
    const LetraMinuscula = /[a-z]/.test(senha);
    const Numero = /\d/.test(senha);
    const CaractersEspeciais = /[!@#$%&*<>:,.]/.test(senha);
    const TamanhoPadrao = senha.length >= 8; 
    //Verificação das variavéis. 
    if(LetraMaiuscula && LetraMinuscula && Numero && CaractersEspeciais && TamanhoPadrao) {
        console.log("Senha Válida e Confirmada");
    }else {
        console.log("Senha Inválida. Veja o por que:");
        if(!LetraMaiuscula)
            console.log("Sua senha está faltando letras Maiusculas");
        if(!LetraMinuscula)
            console.log("Sua senha está faltando letras Minuscula");
        if(!Numero)
            console.log("Sua senha está faltando Números"); 
        if(!CaractersEspeciais)
            console.log("Sua senha está faltando caracteres especiais");
        if(!TamanhoPadrao)
            console.log("Sua senha precisa ter no mínimo 8 caracteres");
    }
    //Fechando interface com usuário. 
    rl.close();
}); 
