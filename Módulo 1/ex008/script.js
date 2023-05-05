let line = []
let doc = ""

do {
    let names = ""
    for (let i = 0; i < line.length; i++) {
        names += (i + 1) + 'º - ' + line[i] + '\n'
    }

    doc = prompt(
        'Bem vindo ao consultório DevDoente, o que gostaria de fazer, doutor?\n' +
        '\n1. Adicionar um paciente a fila.' +
        '\n2. Atender um paciente na fila.' +
        '\n3. Sair.'
    )

    switch (doc) {
        case '1':
            let newName = prompt('Qual o nome do novo paciente?')
            line.push(newName)
            break
        case '2':
            let oldName = line.shift()
            alert('Paciente ' + oldName + ' saiu da fila.')
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }

} while (doc != '3')