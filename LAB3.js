"use strict";
/***Conceitos: arrays numéricos, objetos, funções, enum, narrowing, média móvel simples*****/
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Leituras simples + média
//criando um array com temperaturas
var leiturasC = [22.5, 23.1, 24.0, 25.2, 26.5];
//fazendo a média das temperaturas dentro do array
var mediaTemp = Number((leiturasC.reduce(function (a, b) { return a + b; }, 0) / leiturasC.length).toFixed(2));
console.log('1) Média (°C):', mediaTemp);
console.log("");
//criando uma função que vai receber number, e retornar a conversão para fahrenheit
function cToF(c) { return Number((c * 9 / 5 + 32).toFixed(2)); }
var l1 = { timestamp: new Date().toISOString(), tempC: 25.3 };
console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC));
console.log("");
// 3) Enum de alerta + função de status
var Alerta;
(function (Alerta) {
    Alerta["Ok"] = "OK";
    Alerta["Aten\u00E7\u00E3o"] = "ATENCAO";
    Alerta["Cr\u00EDtico"] = "CRITICO";
})(Alerta || (Alerta = {}));
//função vai retornar o estado de acordo com o tC
function classificar(tC) {
    //se menor ou igual a 28 
    if (tC >= 28)
        return Alerta.Crítico;
    //se menor ou igual a 25 
    if (tC >= 25)
        return Alerta.Atenção;
    //senão
    return Alerta.Ok;
}
console.log('3) Status:', leiturasC.map(function (t) { return ({ t: t, status: classificar(t) }); }));
console.log("");
// 4) Moving Average (média móvel simples) com janela N
function mediaMovel(valores, janela) {
    var out = [];
    for (var i = 0; i < valores.length; i++) {
        var ini = Math.max(0, i - janela + 1);
        var slice = valores.slice(ini, i + 1);
        out.push(Number((slice.reduce(function (a, b) { return a + b; }, 0) / slice.length).toFixed(2)));
    }
    return out;
}
console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3));
console.log("");
function formatTemp(valor, unidade) {
    if (unidade === 'C')
        return "".concat(valor.toFixed(1), " \u00B0C");
    return "".concat(valor.toFixed(1), " \u00B0F");
}
console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F'));
