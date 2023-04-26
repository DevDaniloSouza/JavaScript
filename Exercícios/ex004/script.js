let option = 5

do {
    option = prompt(
        'Seja bem vindo(a)\n' +
        '\nEscolha uma das opções abaixo:' +
        '\n1. Primeira opção' +
        '\n2. Segunda opção' +
        '\n3. Terceira opção' +
        '\n4. Quarta opção' +
        '\n5. Encerrar'
    )

    switch(option) {
        case "1":
            alert('Você escolheu a Primeira opção.')
            break
        case "2":
            alert('Você escolheu a Segunda opção.')
            break
        case "3":
            alert('Você escolheu a Terceira opção.')
            break
        case "4":
            alert('Você escolheu a Quarta opção.')
            break
        case "5":
            alert('Você escolheu a Opção Encerrar.')
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida.')
    }

} while (option !== '5')