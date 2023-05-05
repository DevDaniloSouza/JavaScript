let cards = []
let option = ""

do {
    option = prompt(
        'Cartas no baralho: ' + cards.length +
        '\n\n1. Adicionar Carta.' +
        '\n2. Puxar carta.' +
        '\n3. Sair'
    )

    switch(option) {
        case '1':
            let newCard = prompt('Qual carta deseja adicionar?')
            cards.push(newCard)
            break
        case '2':
            let oldCard = cards.pop()
            if(!oldCard) {
                alert("Não há nenhuma carta no baralho!")
            } else {
                alert("Você puxou um(a) " + oldCard)
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
    }

} while (option != '3')