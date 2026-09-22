const nome = “Ryane Oliveira”
const idade = 19
const categoria = “comum”
const possuiMatricula = true
const inadimplente = false
const valorMensalidade = 110
const valorPago = 150


let idadeStatus

if (idade >= 18) {
    idadeStatus = “Idade permitida”
} else {
    idadeStatus = “Idade nao permitida”
}


let nivelAcesso

if (categoria === “instrutor” || categoria === “coordenador”) {
    nivelAcesso = “Acesso administrativo liberado”
} else {
    nivelAcesso = “Acesso comum”
}


let acessoStatus

if (idade >= 18 && possuiMatricula && !inadimplente) {
    acessoStatus = “Acesso à aula liberado”
} else {
    acessoStatus = “Acesso à aula negado”
}


let pagamentoStatus

if (valorPago >= valorMensalidade) {
    pagamentoStatus = “Pagamento aprovado”
} else {
    pagamentoStatus = “Pagamento insuficiente”
}


let troco

if (pagamentoStatus === “Pagamento aprovado”) {
    troco = valorPago - valorMensalidade
} else {
    troco = 0
}


let statusAula

if (
    acessoStatus === “Acesso à aula liberado” &&
    pagamentoStatus === “Pagamento aprovado”
) {
    statusAula = “Presença na aula confirmada”
} else {
    statusAula = “Presença na aula não confirmada”
}


const resumo = `
Nome: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor da mensalidade: R$ ${valorMensalidade}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação da idade: ${idadeStatus}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusAula}
`

console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiMatricula,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAula,
    resumo
}