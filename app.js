// Addon LiveServer no VSCode serve para abrir o html em um servidor local que atualiza no momento que salva o javascript

// Documentação JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion

alert("Hello World"); // Abre um pop-up para o usuario

let numeroMaximo = 1000;
let numeroSecretoaleatorio = parseInt(Math.random() * numeroMaximo + 1); // Gera um numero aleatorio entre 1 e um numeroMaximo
let entradadoUsuario; // Declara a variavel que vai receber o numero digitado pelo usuario
let tentativas = 0; // Declara a variavel que vai contar o numero de tentativas


while (entradadoUsuario != numeroSecretoaleatorio) { // Enquanto o numero digitado for diferente do numero secreto, pede para digitar novamente
    entradadoUsuario = prompt("Digite um numero de 0 a "+numeroMaximo); // Abre um pop-up para o usuario digitar um numero entre 0 e 100
    tentativas++; // Incrementa o numero de tentativas
    if (entradadoUsuario == numeroSecretoaleatorio) { // Verifica se o numero digitado é igual ao numero secreto
        break; // Se for igual, sai do loop
    } else if (entradadoUsuario > numeroSecretoaleatorio) { // Verifica se o numero digitado é maior que o numero secreto
        alert("Voce errou! O numero secreto é menor que " + entradadoUsuario); // Se for diferente, exibe a mensagem de erro e o numero secreto no pop-up
    } else {
        alert("Voce errou! O numero secreto é maior que " + entradadoUsuario); // Se for diferente, exibe a mensagem de erro e o numero secreto no pop-up
    }
}

let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa' // Verifica se o numero de tentativas é maior que 1, se for, usa a palavra "tentativas", se não, usa a palavra "tentativa"
alert("Voce acertou com " + tentativas + palavraTentativa); // Exibe a mensagem de acerto e o numero de tentativas no pop-up


/*  Desafios 

1 - Mostre um alerta de pop-up com a mensagem "Boas vindas ao nosso site!".

alert("Boas vindas ao nosso site!");

2 - Mostre uma mensagem no console com o texto "Você está no console"

console.log("Você está no console");

3 - Declare uma variável chamada nome e atribua a ela o valor "Lua".

let nome = "Lua";

4 - Crie uma variável chamada idade e atribua a ela o valor 25.

let idade = 25;

5 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

6- Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .

let nome = prompt("Digite seu nome");

7 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade. Caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

let idade = prompt("Digite sua idade");
if (idade >=18) {
alert("Pode tirar a habilitação!");
} 

8 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dia = prompt("Digite um dia da semana")

if (dia == "sabado" || dia == "domingo"){
alert("Bom fim de semana!");
} else {
alert("Boa semana!");
}

9 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt ("Digite um número");
if (numero >=0){
alert ("Seu número é positivo");
} else {
alert ("Seu número é negativo");    
}

10 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 500;
alert(`Seu saldo é ${saldo}`);

11 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt ("Digite seu nome");
alert("Bem-vindo, " + nome);

12 - Imprima no console a soma de dois números digitados pelo usuário. Use tanto a concatenação tradicional quanto uma template string para exibir o resultado.

a = 4;
b = 5;
console.log("Os 2 numeros digitados foram " + a + b); // Exibe os numeros digitados no console
console.log("A soma dos 2 numeros digitados foram " + (a + b)); // Exibe a soma dos numeros digitados no console
console.log(`A soma dos 2 numeros digitados foram ${a + b}`); // Exibe a soma dos numeros digitados no console usando template string

13 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1; 

while (contador <=10){
    alert (contador);
    contador++;
}

14 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador = 10; 

while (contador <=0){
    alert (contador);
    contador--;
}

15 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero = prompt("Digite um número"); 
let contador = numero;

while (contador >=0){
    console.log(contador);
    contador--;
}

16 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt("Digite um número");
let contador = 0;

while (contador <= numero){
    console.log(contador);
    contador++;
}

17 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let aleatorio = Math.random();
console.log(aleatorio);

18 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let aleatorio1a10 = parseInt(Math.random()*10 + 1);
console.log(aleatorio1a10);

19 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let aleatorio1a1000 = parseInt(Math.random()*1000 + 1);
console.log(aleatorio1a1000);

*/


