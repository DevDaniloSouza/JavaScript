let num = document.getElementById('inum')
let lista = document.getElementById('ilista')
let res = document.getElementById('ires')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        ires.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores [pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        ires.innerHTML = ''
        ires.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        ires.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        ires.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        ires.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        ires.innerHTML += `<p>A média dos valores é igual a ${media}</p>`
    }
}