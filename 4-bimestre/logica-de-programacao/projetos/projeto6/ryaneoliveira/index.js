
const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const metaDiaria = Number(prompt("Meta diaria: "))
const metaSemanal = Number(prompt("Meta semanal: "))

let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

for (let i = 1; i <= quantidadeDeDias; i++) {
    let venda = Number(prompt(`Venda do dia ${i}: `))

    totalVendido = totalVendido + venda

    if (venda >= metaDiaria) {
        diasAcimaDaMeta++
    }

    if (venda > melhorDia) {
        melhorDia = venda
    }
}

let mediaVendas = totalVendido / quantidadeDeDias

let situacaoSemana = totalVendido >= metaSemanal
    ? "Meta semanal atingida"
    : "Meta semanal não atingida"

let resumo = `Total vendido: ${totalVendido}
Media por dia: ${mediaVendas}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia de vendas: ${melhorDia}
Situacao da semana: ${situacaoSemana}`

console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}
