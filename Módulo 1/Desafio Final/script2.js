let option = ''
let jobs = []

do {
    option = prompt(
        'Bem vindo ao seu gerenciador de Vagas de Emprego.\n' +
        'O que deseja fazer:\n' +
        '\n1. Listar vagas disponíveis.' +
        '\n2. Criar nova vaga.' +
        '\n3. Visualizar vaga.' +
        '\n4. Inscrever candidato.' +
        '\n5. Excluir vaga.' +
        '\n6. Sair'
    )

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
        let job = {}

        job.name = prompt('Informe o nome da vaga:')
        job.description = prompt('Informe a descrição da vaga:')
        job.data = prompt('Informe a data limite:')

        jobs.push(job)
    }

    function viewJob() {
        let ijob = prompt('Informe o índice a vaga:')

        alert(
            ijob + '. ' +
            jobs[ijob - 1].name + '\n' +
            jobs[ijob - 1].description + '\n' +
            jobs[ijob - 1].data + '\n' +
            jobs[ijob - 1].candidates.length + ' candidatos.'
        )
    }

    function newCandidate() {
        let candidate = prompt('Informe o nome do candidato:')
        let index = parseFloat(prompt('Informe o índice da vaga para inscrição:'))
        jobs[index - 1].candidates.push(candidate)
    }

    function trashJob() {

    }

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