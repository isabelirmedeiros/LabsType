"use strict";
/**
 * Isabeli Rosa de Medeiros - RA: 2503388
 * Conceitos: inferência, tipos explícitos, arrays, tuplas, objetos, união, enum, funções, Map
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 1) variáveis simples + inferência
//definindo variáveis e seus tipos primitivos
var nomeAluno = 'Ana';
var nota1 = 8.5; // number
var nota2 = 7; // number
var aprovado = true; // boolean
// imprimindo o nome do aluno, nota 1, nota 2 e sua média
console.log('1) Variáveis:', { nomeAluno: nomeAluno, nota1: nota1, nota2: nota2, aprovado: aprovado });
console.log("");
// 2) Tipos explícitos + função tipada (média)
//criando uma função chamada média
// vai receber somente number e retornar somente number
function media(a, b) {
    return Number(((a + b) / 2).toFixed(2)); // retornar com duas casas decimais 
}
//chamando a função dentro da variável mediaAna
var mediaAna = media(nota1, nota2);
console.log('2) Média de Ana:', mediaAna);
console.log("");
// 3) Array tipado + map/filter
var notas = [6, 7.5, 8, 9.2, 10];
//criando um filtro, se cada nota dentro do array for maior ou igual a 8 
// vai adicionar no array acima8
var acimaDe8 = notas.filter(function (n) { return n >= 8; });
//em notas irá adicionar 0.5 em cada, menos nas que já são 10
var mediasAjustadas = notas.map(function (n) { return Math.min(n + 0.5, 10); });
console.log('3) Arrays:', { acimaDe8: acimaDe8, mediasAjustadas: mediasAjustadas });
console.log("");
// 4) Tupla (nome, média) + ordenação
// criando uma tupla e definindo os tipos
var registro = ['Edu', media(9, 8.5)];
console.log('4) Tupla (nome, média):', registro);
console.log("");
var alunos = [
    { id: 'a1', nome: 'Ana', notas: [8, 7.5, 9] },
    { id: 'a2', nome: 'Bia', notas: [6, 6.5, 7] },
    { id: 'a3', nome: 'Cris', notas: [9.5, 8.5, 10] },
];
//criando uma função que vai fazer a media das notas dos alunos
function mediaAluno(a) {
    //domando rtodas as notas
    var soma = a.notas.reduce(function (acc, n) { return acc + n; }, 0);
    //retorna a soma total das notas dividido pela quantidade de notas, assim fazendo a média
    return Number((soma / a.notas.length).toFixed(2));
}
console.log('5) Médias:', alunos.map(function (a) { return ({ nome: a.nome, media: mediaAluno(a) }); }));
console.log("");
function formatarId(id) {
    //se for number transforma em string e adiciona zeros à esquerda até ter 3 dígitos
    // e se for string transforma em maiúsculas
    return typeof id === 'number' ? id.toString().padStart(3, '0') : id.toUpperCase();
}
console.log('6) União:', formatarId(7), formatarId('a3'));
console.log("");
// 7) Enum de status + classificação por média
//cria um enum para representar status do aluno
var StatusAluno;
(function (StatusAluno) {
    StatusAluno["Aprovado"] = "APROVADO";
    StatusAluno["Recuperacao"] = "RECUPERA\u00C7\u00C3O";
    StatusAluno["Reprovado"] = "REPROVADO";
})(StatusAluno || (StatusAluno = {}));
//função que recebe a média e retorna o status correspondente.
function statusPorMedia(m) {
    if (m >= 7)
        return StatusAluno.Aprovado;
    if (m >= 5)
        return StatusAluno.Recuperacao;
    return StatusAluno.Reprovado;
}
//Para cada aluno, calcula a média e atribui o status.
console.log('7) Status:', alunos.map(function (a) { return ({ nome: a.nome, status: statusPorMedia(mediaAluno(a)) }); }));
console.log("");
// 8) Map<string, number> (nome → média)
var mediasPorNome = new Map();
for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
    var a = alunos_1[_i];
    mediasPorNome.set(a.nome, mediaAluno(a));
}
console.log('8) Map (nome→média):', Array.from(mediasPorNome.entries()));
