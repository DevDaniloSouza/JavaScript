function addPlayer() {
    let position = document.getElementById('position')
    let name = document.getElementById('name')
    let number = document.getElementById('number')

    let ul = document.getElementById('list')
    let newLi = document.createElement('li')

    newLi.innerHTML = 'Nome: ' + name.value + '<br>' +
    'Posição: ' + position.value + '<br>' + 'Camisa: ' + number.value

    question = confirm ('Deseja adicionar esse Jogador?')

    if (question) {
        ul.appendChild(newLi)
    }

    position.value = ''
    name.value = ''
    number.value = ''
}

function remPlayer() {
    let num = document.getElementById('num')

    
}