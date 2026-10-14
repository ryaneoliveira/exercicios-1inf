const cliente = "Otávio Lacerda"
const opcao = 1
const quantidade = 5
const formaPagamento = "cartao"
const statusPedido

let item

switch (opcao) {

    case 1:
      console.log("Sushi")
      break

    case 2:
      console.log("Temaki")    
    break  

    case 3:
      console.log("Yakisoba")
    break
    
    case 4: 
      console.log("Chá Gelado")
    break   

    default:
      console.log("Opção inválida")
} 


let precoUnitario

switch (opcao) {

    case 1:
      console.log(32)
      break

    case 2:
      console.log(24)    
    break  

    case 3:
      console.log(28)
    break
    
    case 4: 
      console.log(9)
      break   

    default:
      console.log(0)
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
    console.log("Pagamento via PIX")
    break

  case "cartao":
    console.log("Pagamento via cartão")
    break

  case "dinheiro":
    console.log("Pagamento em dinheiro")
    break

  default:
    console.log("Forma de pagamento inválida")
}


let descontoPercentual 

switch (formaPagamento) {

  case "pix":
  case "dinheiro":
    console.log(5)
    break

  case "cartao":
    console.log(0)
    break

  default:
    console.log(0)
}


const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + valorFrete

let mensagemStatus 

switch (statusPedido) {

  case "pendente":
    console.log("Aguardando pagamento")
    break

  case "aprovado":
    console.log("Pedido em preparo")
    break

  case "enviado":
    console.log("Pedido a caminho")
    break

case "cancelado":
    console.log("Pedido cancelado")
    break

  default:
    console.log("Status desconhecido")
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