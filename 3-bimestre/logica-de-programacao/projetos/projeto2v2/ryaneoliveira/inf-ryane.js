let idadeStatus =""
let descontoStatus=""
let pagamentoStatus=""
let statusMatricula=""
const aluno = "Melissa Rocha"
const curso = "Curso Tecnico em Redes"
const valorMensalidade = 700
const taxaMatricula = 80
const idade = 17
const pagamentoAntecipado = 1 
const valorPago = 780
const valorBase = valorMensalidade + taxaMatricula
const valorDesconto = 70
const valorFinal = valorBase - valorDesconto
const troco = valorPago - valorFinal

if(idade>=18) {
    idadeStatus("Idade permitida") 
} else {
    idadeStatus("Idade nao permitida")
}


if(pagamentoAntecipado===1) {
    descontoStatus("Sem desconto")
} else {
    descontoStatus("Sem desconto")
}


if(valorPago>=valorFinal) {
    pagamentoStatus = "Matrícula quitada"
} else {
    pagamentoStatus = "Matrícula com saldo pendente"
}


if(idadeStatus==="idada permitida" && pagamentoStatus==="Matrícula quitada")
{
    statusMatricula = "Matrícula confirmada"
} else if (idadeStatus === "Idade aprovada") {
    statusMatricula = "matrícula confirmada com pagamento pendente"
} else {
    statusMatricula ="Matrícula não pode ser confirmada: idade não permitida"
}

const resumo = `
// Ola, aluna ${aluno}! Sua matriula no curso ${curso}, está com as seguintes informações:
Valor mensal : ${valorMensalidade}
Taxa de material : ${taxaMatricula}
Porem, sua matricula infelizmente não será realizada pois a idade minima é de 18 anos, e em seus dados está informando que você tem ${idade}

`







module.exports = {
    aluno,
    curso,
    valorMensalidade,
    taxaMatricula,
    idade,
    pagamentoAntecipado,
    valorPago,
    valorBase,
    idadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
}