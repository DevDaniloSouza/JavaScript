function jobList() {
    let list = jobs.reduce(function (text, job, index) {
        text += index + '. '
        text += job.name
        text += ' (' + job.candidates.length + ' candidatos)\n'
        return text
    }, '')

    alert (list)
}

function newJob() {
    let name = prompt('Informe o nome da vaga:')
    let description = prompt('Informe a descrição ad vaga:')
    let data = prompt('Informe a data limite da vaga:')

    let confirm = alert(
        'Nome: ' + name + '\n' +
        'Descrição: ' + description + '\n' +
        'Data limite: ' + data + '\n'
    )

    if (confirm) {
        let newJob = {name, description, data, candidates: []}
        jobs.push(newJob)
        alert('Vaga criada!')
    }
}

function viewJob() {
    let index = prompt('Informe o índice da vaga:')
    let job = jobs[index]

    let candidatesText = candidates.reduce(function (text, candidate) {
        return text + '/n - ' + candidate
    }, '')

    alert(
        'Vaga nº' + index +
        '\nNome: ' + job.name +
        '\nDescrição: ' + job.description +
        '\nData limite: ' + job.data +
        '\nQuantidade de candidatos: ' +  vaga.candidates.length +
        '\nCandidatos: ' + candidatesText

    )
}

function newCandidate() {
    let candidate = prompt('Informe o nome do candidato:')
    let index = prompt('Informe o índice da vaga para inscrição:')
    let job = jobs[index]

    let confirm = confirm(
        'Deseja inscrever o candidato ' + candidate + ' na vaga:\n' +
        'Nome:' + job.name + '\n' +
        'Descrição: ' + job.description + '\n' +
        'Data limite: ' + job.data + '\n'
        )

    if (confirm) {
        vaga.candidates.push(candidate)
        alert('Inscrição realizada!')
    }
}

function trashJob() {
    let index = prompt('Informe o índice da vaga que deseja excluir:')
    let job = jobs[index]

    let confirm = confirm(
        'Deseja excluir esta vaga permanentemente?' +
        'Nome:' + job.name + '\n' +
        'Descrição: ' + job.description + '\n' +
        'Data limite: ' + job.data + '\n'
        )
    
    if (confirm) {
        jobs.splice(index, 1)
        alert('Vaga excluída!')
    }
}

function menu() {
    let option = prompt(
        'Bem vindo ao seu gerenciador de Vagas de Emprego.\n' +
        'O que deseja fazer:\n' +
        '\n1. Listar vagas disponíveis.' +
        '\n2. Criar nova vaga.' +
        '\n3. Visualizar vaga.' +
        '\n4. Inscrever candidato.' +
        '\n5. Excluir vaga.' +
        '\n6. Sair'
    )
    
    return option
}

function exe() {
    let option = ''

    do {
        option = menu()

        switch (option) {
            case '1':
                jobList()
                break
            case '2':
                newJob()
                break
            case '3':
                viewJob()
                break
            case '4':
                newCandidate()
                break
            case '5':
                trashJob()
                break
            case '6':
                alert('Encerrando...')
                break
            default:
                alert('Opção inválida!')
        }

    } while (option !== '6')
}

exe()