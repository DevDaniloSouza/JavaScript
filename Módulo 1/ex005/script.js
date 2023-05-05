let money = prompt('Informe o saldo inicial:')
money = parseFloat(money)
let option = ""

do {
    option = prompt(
        'Saldo disponível: R$ ' + money +
        '\n1. Adicionar dinheiro.' +
        '\n2. Retirar dinheiro.' +
        '\n3. Sair'
    )

    switch (option){
        case '1':
            money += parseFloat(prompt('Qual quantia gostaria de adicionar:'))
            break
        case '2':
            money -= parseFloat(prompt('Qual quantia gostaria de retirar?'))
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Entrada inválida!')
    }

} while (option !== '3')