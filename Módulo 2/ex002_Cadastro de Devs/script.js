let div = document.getElementById('show')
div.style.display = 'none'

let buttonAdd = document.getElementById('add')
buttonAdd.addEventListener('click', function(ev) {
    ev.preventDefault()

    div.style.display = 'block' 
})

let buttonRem = document.getElementById('remove')
buttonRem.addEventListener('click', function(ev) {
    ev.preventDefault()

    div.style.display = 'none'
})

let cadaster = document.getElementById('Cadaster')
cadaster.addEventListener('click', function(ev) {
    ev.preventDefault()
    let dev = []

    let name = document.getElementById('name').value
    let tec = document.getElementById('tec').value
    let exp = 
    
    dev.push(name)
    dev.push(tec)
    dev.push(exp)

    alert(
        'Dev cadastrado:\n' +
        'Nome: ' + name + '\n' +
        'Tecnologia: ' + tec + '\n' +
        'Experiência: ' + exp + ' anos'
        )

    document.getElementById('name').value = ''
    document.getElementById('tec').value = ''
    document.getElementByName('timeExp').value = ''
})