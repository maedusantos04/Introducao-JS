// console.log("JavaScript funcionando!") - testamos esse primeiro

// const nome = "Carlos";
// const idade = 20;
// const estudante = true;

// console.log(nome)
// console.log(idade)
// console.log(estudante)

// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

// if(idade >= 18) {
//     console.log("Maior de idade")
// }
// else{
//     console.log("Menor de idade")
// }

// const nomes = [
//     "Fernanda",
//     "Bruno",
//     "Leonardo",
//     "Eric",
//     "Samuel"
// ]

// console.log (nomes[2])

// console.log(nomes)

// for (let cont = 0; cont < nomes.length; cont++) {
//     console.log(nomes[cont]);
// }

// function calcularMedia(nota1, nota2){
//     return (nota1 + nota2) / 2
// }

// const media = calcularMedia(8, 7);

// console.log(media)

// if (media >= 7) {
//     console.log("Aprovado")
// } else if(media >= 5) {
//     console.log("Recuperação")
// } else {
//     console.log("Reprovado")
// }

////////////------- ATIVIDADE --------/////////////

// Atividade 1

const nome = "Duda";
const idade = 21;
const cidade = "São Paulo";
const profissao = "Aprendiz";

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${profissao}.`);

// Atividade 2

const num1 = 10;
const num2 = 5;

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);

// Atividade 3

const idadeAnos = 21;
const idadeMeses = idadeAnos * 12;

console.log(`Com ${idadeAnos} anos, você já viveu aproximadamente ${idadeMeses} meses.`);

// Atividade 4

const nota1 = 8.0;
const nota2 = 7.5;
const nota3 = 9.0;

const media = (nota1 + nota2 + nota3) / 3;
console.log(`A média das notas é: ${media.toFixed(2)}`);

// Atividade 5

const idadePessoa = 17;

if (idadePessoa >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Atividade 6

const numero = -5;

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é igual a zero.");
}

// Atividade 7

const valor = 14;

if (valor % 2 === 0) {
  console.log(`O número ${valor} é par.`);
} else {
  console.log(`O número ${valor} é ímpar.`);
}

// Atividade 8

const n1 = 6.5;
const n2 = 5.5;
const mediaAluno = (n1 + n2) / 2;

console.log(`Média: ${mediaAluno}`);

if (mediaAluno >= 7) {
  console.log("Situação: Aprovado");
} else if (mediaAluno >= 5) {
  console.log("Situação: Em recuperação");
} else {
  console.log("Situação: Reprovado");
}

// Atividade 9

const a = 15;
const b = 20;

if (a > b) {
  console.log(`O maior número é ${a}.`);
} else if (b > a) {
  console.log(`O maior número é ${b}.`);
} else {
  console.log("Os dois números são iguais.");
}

// Atividade 10

const numA = 12;
const numB = 25;
const numC = 18;

if (numA >= numB && numA >= numC) {
  console.log(`O maior número é ${numA}.`);
} else if (numB >= numA && numB >= numC) {
  console.log(`O maior número é ${numB}.`);
} else {
  console.log(`O maior número é ${numC}.`);
}

// Atividade 11

const precoOriginal = 150.00;
let precoFinal = precoOriginal;

if (precoOriginal > 100) {
  precoFinal = precoOriginal * 0.90; // 10% de desconto
}

console.log(`Valor original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Valor final: R$ ${precoFinal.toFixed(2)}`);

// Atividade 12

const idadeAcesso = 20;
const estaAutorizado = true;

if (idadeAcesso >= 18 && estaAutorizado) {
  console.log("Acesso permitido.");
} else {
  console.log("Acesso negado.");
}


// Atividade 13

const nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"];

nomes.forEach(nome => console.log(nome));


// Atividade 14

const compras = ["Arroz", "Feijão", "Leite", "Café", "Pão"];

console.log(`Quantidade total de itens: ${compras.length}`);
console.log("Produtos cadastrados:");
compras.forEach(item => console.log(`- ${item}`));


// Atividade 15

const pessoa = {
  nome: "Lucas",
  idade: 30,
  cidade: "Curitiba",
  profissao: "Designer"
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Cidade: ${pessoa.cidade}`);
console.log(`Profissão: ${pessoa.profissao}`);


// Atividade 16

const produto = {
  nome: "Teclado Mecânico",
  preco: 250.00,
  categoria: "Periféricos",
  disponivel: true
};

const status = produto.disponivel ? "disponível" : "indisponível";
console.log(`O produto "${produto.nome}" da categoria "${produto.categoria}" custa R$ ${produto.preco.toFixed(2)} e está atualmente ${status}.`);


// Atividade 17

const alunos = [
  { nome: "João", idade: 15 },
  { nome: "Mariana", idade: 16 },
  { nome: "Pedro", idade: 14 }
];

alunos.forEach(aluno => {
  console.log(`Aluno: ${aluno.nome} | Idade: ${aluno.idade} anos`);
});


// Atividade 18

function calcularDobro(numero) {
  return numero * 2;
}

console.log(calcularDobro(4));  // Output: 8
console.log(calcularDobro(7));  // Output: 14
console.log(calcularDobro(15)); // Output: 30


// Atividade 19

function somar(n1, n2) {
  return n1 + n2;
}

console.log(`10 + 5 = ${somar(10, 5)}`);
console.log(`20 + 30 = ${somar(20, 30)}`);
console.log(`-5 + 15 = ${somar(-5, 15)}`);


// Atividade 20

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

console.log(`Média (8, 6): ${calcularMedia(8, 6)}`);
console.log(`Média (10, 9): ${calcularMedia(10, 9)}`);
console.log(`Média (4, 5): ${calcularMedia(4, 5)}`);


// Atividade 21

function saudar(nome) {
  console.log(`Seja bem-vindo(a), ${nome}!`);
}

saudar("Fernanda");
saudar("Gabriel");


// Atividade 22

const numeroTabuada = 7;

console.log(`Tabuada do ${numeroTabuada}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}



// Atividade 23

for (let i = 1; i <= 20; i++) {
  console.log(i);
}



// Atividade 24

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Fim!");



// Atividade 25

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Atividade 26

const numeros = [10, 20, 30, 40, 50];

const somaTotal = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(`Soma de todos os números: ${somaTotal}`);



// Atividade 27

const notasLista = [7.0, 8.5, 9.0, 6.5, 10.0];

const somaNotas = notasLista.reduce((acc, nota) => acc + nota, 0);
const mediaLista = somaNotas / notasLista.length;

console.log(`Média da lista: ${mediaLista.toFixed(2)}`);



// Atividade 28

const produtoEstoque = {
  nome: "Monitor 24 polegadas",
  preco: 899.90,
  quantidadeEstoque: 3
};

if (produtoEstoque.quantidadeEstoque > 0) {
  console.log(`O produto "${produtoEstoque.nome}" está DISPONÍVEL (${produtoEstoque.quantidadeEstoque} unidades em estoque).`);
} else {
  console.log(`O produto "${produtoEstoque.nome}" está INDISPONÍVEL.`);
}



// Atividade 29

const nomeAluno = "Carlos";
const nota1 = 8.5;
const nota2 = 6.0;

const media = (nota1 + nota2) / 2;

let situacao = "";
if (media >= 7) {
  situacao = "Aprovado";
} else if (media >= 5) {
  situacao = "Em recuperação";
} else {
  situacao = "Reprovado";
}

console.log(`Aluno: ${nomeAluno}`);
console.log(`Média: ${media.toFixed(1)}`);
console.log(`Situação: ${situacao}`);



// Atividade 30

const alunos = [
  { nome: "Ana Silva", nota1: 8.5, nota2: 7.5 },
  { nome: "Bruno Costa", nota1: 5.5, nota2: 6.0 },
  { nome: "Carla Souza", nota1: 3.5, nota2: 4.0 }
];

alunos.forEach(aluno => {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  let situacao = "";

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    situacao = "Em recuperação";
  } else {
    situacao = "Reprovado";
  }

  console.log(`--- Boletim: ${aluno.nome} ---`);
  console.log(`Primeira nota: ${aluno.nota1.toFixed(1)}`);
  console.log(`Segunda nota: ${aluno.nota2.toFixed(1)}`);
  console.log(`Média final: ${media.toFixed(1)}`);
  console.log(`Situação: ${situacao}\n`);
});