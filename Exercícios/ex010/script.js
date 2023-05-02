let Houses = []
let option = ""

do {
    option = prompt(
        "Bem Vindo(a) ao Cadastro de Imóveis!\n" +
        "Total de Imóveis: " + Houses.length +
        "\n\nEscolha uma  opção:\n1. Novo Imóvel\n2. Lista de Imóveis\n3. Sair"
    )

    switch (option){
        case '1':
            let house = {}
            
            house.proprietario = prompt("Informe o nome do propietário:")
            house.quarto = prompt("Informe a quantidade de quartos:")
            house.banheiro = prompt("Informe a quantidade de banheiro:")
            house.garagem = prompt("A casa possui garagem: (Sim/Não)")

            let confirm = prompt(
                `Salvar este imóvel? (Sim/Não)\n\nPropietário: ${house.proprietario}\nQuartos: ${house.quarto}\nBanheiros: ${house.banheiro}\nGaragem: ${house.garagem}`
            )

            if (confirm === 'Sim') {
                Houses.push(house)
            }
            break
        case '2':
            for (let i = 0; i < Houses.length; i++) {
                alert(
                    `Imóvel ${i}\nPropietário: ${Houses[i].proprietario}\nQuartos: ${Houses[i].quarto}\nBanheiros: ${Houses[i].banheiro}\nGaragem: ${Houses[i].garagem}`
                )
            }
            break
        case '3':
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }

} while (option != '3')