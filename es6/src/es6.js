// desestruturacao

const pessoa = {
	nome: "Paulinely Morgan",
	idade: 30,
	endereco: {
		rua: "av. santo antonio",
		numero: 2000,
		cidade: "Garanhuns"
	},
	pais: "Brasil"
};

const {pais, idade, endereco: {cidade}, nome} = pessoa;

console.log(pais);
console.log(nome);
console.log(idade);
console.log(cidade);

const array = [3, 0, 4, 5, 6];

// rest (...) -> pega todo o resto
const [primeiro, segundo, ...resto] = array;

console.log(primeiro);
console.log(segundo);
console.log(resto);

//spread ..., ... -> concatena
const a = [9, 8, 7];
const b = [6, 5, 4];
const c = [...a, ...b];

console.log(c);

// outra uso para o spread
const pessoa2 = {...pessoa, nome: "Pessoa2"};

console.log(pessoa2);

// template literals
const estado = "PE";
const regiao = "Nordeste";

console.log(`meu estado e\' ${estado} e minha regiao e\' ${regiao}`);
