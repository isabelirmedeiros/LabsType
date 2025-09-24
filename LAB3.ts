/***Conceitos: arrays numéricos, objetos, funções, enum, narrowing, média móvel simples*****/

// 1) Leituras simples + média
//criando um array com temperaturas
const leiturasC: number[] = [22.5, 23.1, 24.0, 25.2, 26.5];
//fazendo a média das temperaturas dentro do array
const mediaTemp = Number((leiturasC.reduce((a, b) => a + b, 0) / leiturasC.length).toFixed(2));
console.log('1) Média (°C):', mediaTemp);

console.log("");

// 2) Objeto de leitura + conversão C↔F
type Leitura = { timestamp: string; tempC: number };

//criando uma função que vai receber number, e retornar a conversão para fahrenheit
function cToF(c: number): number { return Number((c * 9/5 + 32).toFixed(2)); }
const l1: Leitura = { timestamp: new Date().toISOString(), tempC: 25.3 };
console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC));

console.log("");

// 3) Enum de alerta + função de status
enum Alerta { Ok = 'OK', Atenção = 'ATENCAO', Crítico = 'CRITICO' }
//função vai retornar o estado de acordo com o tC
function classificar(tC: number): Alerta {
    //se menor ou igual a 28 
    if (tC >= 28) return Alerta.Crítico;
    //se menor ou igual a 25 
    if (tC >= 25) return Alerta.Atenção;
    //senão
    return Alerta.Ok;
}
console.log('3) Status:', leiturasC.map(t => ({ t, status: classificar(t) })));

console.log("");

// 4) Moving Average (média móvel simples) com janela N
function mediaMovel(valores: number[], janela: number): number[] {
    const out: number[] = [];
    for (let i = 0; i < valores.length; i++) {
        const ini = Math.max(0, i - janela + 1);
        const slice = valores.slice(ini, i + 1);
        out.push(Number((slice.reduce((a, b) => a + b, 0) / slice.length).toFixed(2)));
    }
    return out;
}
console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3));

console.log("");

// 5) União de unidade + narrowing
type Unidade = 'C' | 'F';
function formatTemp(valor: number, unidade: Unidade): string {
    if (unidade === 'C') return `${valor.toFixed(1)} °C`;
    return `${valor.toFixed(1)} °F`;
}
console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F'));

export {};