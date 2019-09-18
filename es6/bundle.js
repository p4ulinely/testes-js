"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// desestruturacao
var pessoa = {
  nome: "Paulinely Morgan",
  idade: 30,
  endereco: {
    rua: "av. santo antonio",
    numero: 2000,
    cidade: "Garanhuns"
  },
  pais: "Brasil"
};
var pais = pessoa.pais,
    idade = pessoa.idade,
    cidade = pessoa.endereco.cidade,
    nome = pessoa.nome;
console.log(pais);
console.log(nome);
console.log(idade);
console.log(cidade);
var array = [3, 0, 4, 5, 6]; // rest (...) -> pega todo o resto

var primeiro = array[0],
    segundo = array[1],
    resto = array.slice(2);
console.log(primeiro);
console.log(segundo);
console.log(resto); //spread ..., ... -> concatena

var a = [9, 8, 7];
var b = [6, 5, 4];
var c = [].concat(a, b);
console.log(c); // outra uso para o spread

var pessoa2 = _objectSpread({}, pessoa, {
  nome: "Pessoa2"
});

console.log(pessoa2); // template literals

var estado = "PE";
var regiao = "Nordeste";
console.log("meu estado e' ".concat(estado, " e minha regiao e' ").concat(regiao));
