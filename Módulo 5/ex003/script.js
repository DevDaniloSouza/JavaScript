async function CalculateIMC(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject("Os dados não são numéricos!")
    } else {
        return weight / (height * height)
    }
}

function showImc(weight, height) {
    CalculateIMC(weight, height).then((result) => {
        const text = 'Seu IMC é: ' + result
        if (result < 18.5) console.log(text + ' - Magreza')
        else if (result < 25) console.log(text + ' - Normal')
        else if (result < 30) console.log(text + ' - Sobrepeso')
        else if (result < 40) console.log(text + ' - Obesidade')
        else console.log(text + ' - Obesidade grave')
    }).catch((error) => {
        console.log(`Ocorreu um erro: ${error}`)
    }).finally(() => {
        console.log("Calculo finalizado!")
    })
}

showImc(59, 1.68)

// Meu código...