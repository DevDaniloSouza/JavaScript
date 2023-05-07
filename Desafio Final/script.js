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
        for (let i = 0; i < jobs.length; i++) {}
    }

    function newJob() {
        let job = {}

        job.name = prompt('Informe o nome da vaga:')
        job.description = prompt('Informe a descrição da vaga:')
        job.data = prompt('Informe a data limite:')

        confirm('Deseja salvar esta vaga?')

        if (confirm) {
            jobs.push(job)
        }
    }

    function viewJob() {

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