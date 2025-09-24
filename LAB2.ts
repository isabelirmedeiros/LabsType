/**
 * ts/ex2_veiculos.ts
 * Conceitos: literais, união, enum, objetos, arrays, Map, funções utilitárias
 */

// 1) Literais + união
// defini os tipos e estruturas de dados
type Tipo = 'carro' | 'moto' | 'caminhao';
type Placa = string;

interface Veiculo {
    placa: Placa;
    tipo: Tipo;
    ano: number;
    fabricante: string;
    cor: string;
}

const v1: Veiculo = { placa: 'ABC1D23', tipo: 'carro', ano: 2020, fabricante: 'Chevrolet', cor: 'preto' };
console.log('1) Veículo:', v1);

// 2) Lista + filtros + mapeamentos
//cria uma lista de frota de veiculos, filter pega só os veiculos do tipo carro e guarda em soCarros, map extrai apenas os anos de todos os veiculos
const frota: Veiculo[] = [
    v1,
    { placa: 'XYZ9K88', tipo: 'moto', ano: 2018, fabricante: 'Honda', cor: 'vermelho' },
    { placa: 'JKL2M34', tipo: 'caminhao', ano: 2022, fabricante: 'Volvo', cor: 'branco' },
];

const soCarros = frota.filter(v => v.tipo === 'carro');
const anos = frota.map(v => v.ano);
console.log('2) Filtros/Map:', { soCarros, anos });

// 3) Enum + helpers
// Defini unum CorPadrao com cores fixas e a função pintar recebe um veiculo e uma cor, e retorna uma cópia do veiculo com a cor trocada
enum CorPadrao { Preto = 'preto', Branco = 'branco', Vermelho = 'vermelho' }
function pintar(v: Veiculo, cor: CorPadrao): Veiculo {
    return { ...v, cor };
}
console.log('3) Pintando veículo:', pintar(v1, CorPadrao.Branco));

// 4) Função utilitária: normalizar placa
// A função recebe uma string de placa, usa regex para remover tudo que nao for letra ou numero
function normalizarPlaca(p: string): Placa {
    return p.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}
console.log('4) Placa normalizada:', normalizarPlaca('abc-1d23'));

// 5) Map por tipo (agrupamento)
const porTipo = new Map<Tipo, Veiculo[]>();
for (const v of frota) {
    const arr = porTipo.get(v.tipo) ?? [];
    arr.push(v);
    porTipo.set(v.tipo, arr);
}
console.log('5) Agrupados por tipo:', Array.from(porTipo.entries()));

export {};
