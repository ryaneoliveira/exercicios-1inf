const cliente = "Otávio Lacerda"
const opcao = 1
const quantidade = 5
const formaPagamento = "cartao"
const statusPedido = "cancelado"

let item

switch (opcao) {

    case 1:
      item = "Sushi"
      break

    case 2:
      item = "Temaki"    
    break  

    case 3:
      item = "Yakisoba"
    break
    
    case 4: 
      item = "Chá Gelado"
    break   

    default:
      item = "Opção inválida"
} 


let precoUnitario

switch (opcao) {

    case 1:
      precoUnitario = 32
      break

    case 2:
      precoUnitario = 24    
    break  

    case 3:
      precoUnitario = 28
    break
    
    case 4: 
      precoUnitario = 9
      break   

    default:
      precoUnitario = 0
}

const subtotal = precoUnitario * quantidade 

const freteGratis = subtotal >= 100

const situacaoFrete = freteGratis
    ? "Frete grátis"
    : "Frete Pago"
    
const valorFrete = freteGratis ? 0 : 15


let mensagemPagamento

switch (formaPagamento) {

  case "pix":
    mensagemPagamento = "Pagamento via PIX"
    break

  case "cartao":
    mensagemPagamento = "Pagamento via cartão"
    break

  case "dinheiro":
    mensagemPagamento = "Pagamento em dinheiro"
    break

  default:
    mensagemPagamento = "Forma de pagamento inválida"
}


let descontoPercentual 

switch (formaPagamento) {

  case "pix":
  case "dinheiro":
    descontoPercentual = 5
    break

  case "cartao":
    descontoPercentual = 0
    break

  default:
    descontoPercentual = 0
}


const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + valorFrete

let mensagemStatus 

switch (statusPedido) {

  case "pendente":
    mensagemStatus = "Aguardando pagamento"
    break

  case "aprovado":
    mensagemStatus = "Pedido em preparo"
    break

  case "enviado":
    mensagemStatus = "Pedido a caminho"
    break

case "cancelado":
    mensagemStatus = "Pedido cancelado"
    break

  default:
    mensagemStatus = "Status desconhecido"
}

const resumo = `

cliente: ${cliente}
item: ${item}
quantidade: ${quantidade}
preço unitário: R$ ${precoUnitario}
subtotal: R$ ${subtotal}
situação do frete: ${mensagemPagamento}
valor do frete: R$ ${valorFrete}
forma de pagamento: ${mensagemPagamento}
desconto: ${descontoPercentual}
valor do desconto: R$ ${desconto}
total do pedido: R$ ${total}
status do pedido: ${mensagemStatus}
`
console.log(resumo)
