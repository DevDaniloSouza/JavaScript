let option = ''

do {
    option = prompt(
        'Bem vindo a Calculadora Geométrica! A área de qual forma gostaria de calcular?\n' +
        '\n1. Área do Quadrado' +
        '\n2. Área do Triângulo' +
        '\n3. Área do Retângulo' +
        '\n4. Área do Trapézio' +
        '\n5. Área do Círculo' +
        '\n6. Sair'
    )

    switch (option) {
        case '1':
            let side = prompt('Informe o valor do lado do quadrado:')
            alert('A área do quadrado vale: ' + side*side)
            break
        case '2':
            let baseSq = prompt('Informe o valor da base do triângulo:')
            let heightSq = prompt('Informe o valor da altura do triângulo:')
            alert('A área do triângulo vale: ' + baseSq*heightSq/2)
            break
        case '3':
            let baseRec = prompt('Informe o valor da base do retângulo:')
            let heightRec = prompt('Informe o valor da altura do retângulo:')
            alert('A área do retângulo vale: ' + baseRec*heightRec)
            break
        case '4':
            let Base = parseFloat(prompt('Informe o valor da base maior do trapézio:'))
            let base = parseFloat(prompt('Informe o valor da base menor do trapézio:'))
            let height = parseFloat(prompt('Informe o valor da altura do trapézio:'))
            alert('A área do trapézio vale: ' + (Base + base) * height / 2)
            break
        case '5':
            let ray = parseFloat(prompt('Informe o valor do raio do círculo:'))
            alert('A área do círculo vale (considerando pi "3,14"): ' + 3.14 * (ray*ray))
            break
        case '6':
            alert('Encerrando...')
            break
        default:
            alert('Opção Inválida!')
    }

} while (option !== '6')