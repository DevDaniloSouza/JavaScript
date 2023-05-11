function addPlayer() {
    let position = document.getElementById('position')
    let name = document.getElementById('name')
    let number = document.getElementById('number')

    let ul = document.getElementById('list')
    let newLi = document.createElement('li')
    newLi.id = 'player' + number.value

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
    let num = document.getElementById('num').value
    let playerToRemove = document.getElementById('player' + num)

    confirmation = confirm('Deseja excluir jogador de camisa ' + num + '?')

    if(confirmation) {
        document.getElementById('list').removeChild(playerToRemove)
        document.getElementById('num').value = ''
    }
}