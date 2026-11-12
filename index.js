const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const verificaPrimo = require("./funcoes/numeroprimo");
const calcularSomatorio = require("./funcoes/somatorio");
const gerarFibonacci = require("./funcoes/fibonacci");
const calcularMDC = require("./funcoes/mdc");
const quicksort = require("./funcoes/quicksort");
const contarValores = require("./funcoes/contagem");

const rl = readline.createInterface({ input, output });

function lerLista(texto) {
    return texto.split(",").map(Number);
}

async function executar(titulo, acao) {
    try {
        await acao();
    } catch (erro) {
        console.log(`-> Erro em ${titulo}: ${erro.message}\n`);
    }
}

async function main() {
    await executar("PRIMO", async () => {
        const numero = parseInt(await rl.question("1. PRIMO: Digite um numero inteiro: "));
        console.log(`-> ${numero} e primo? ${verificaPrimo(numero) ? "Sim" : "Nao"}\n`);
    });

    await executar("SOMATORIO", async () => {
        const lista = lerLista(await rl.question("2. SOMATORIO: Numeros separados por virgula: "));
        console.log(`-> Somatorio: ${calcularSomatorio(lista)}\n`);
    });

    await executar("FIBONACCI", async () => {
        const termos = parseInt(await rl.question("3. FIBONACCI: Quantos termos? "));
        console.log(`-> Sequencia: ${gerarFibonacci(termos).join(", ")}\n`);
    });

    await executar("MDC", async () => {
        const a = parseInt(await rl.question("4. MDC: Primeiro numero: "));
        const b = parseInt(await rl.question("4. MDC: Segundo numero: "));
        console.log(`-> MDC: ${calcularMDC(a, b)}\n`);
    });

    await executar("QUICKSORT", async () => {
        const lista = lerLista(await rl.question("5. QUICKSORT: Numeros separados por virgula: "));
        console.log(`-> Ordenado: ${quicksort(lista).join(", ")}\n`);
    });

    await executar("CONTAGEM", async () => {
        const dados = lerLista(await rl.question("6. CONTAGEM: Dados separados por virgula: "));
        const limite = parseFloat(await rl.question("Digite o valor de N (limite): "));
        console.log(`-> Inteiros entre ${dados[0]} e ${limite}: ${contarValores(dados, limite)}\n`);
    });

    rl.close();
}

main();
