const turista = prompt('Eai, turista! Qual é o seu nome?')
let citys = ''
let count = 0

let ask = prompt('Você visitou alguma cidade? (Sim/Não)')

while (ask === 'Sim') {
    let city = prompt('Qual é o nome da cidade visitada?')
    citys += ' - ' + city + '\n'
    count++
    ask = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}

alert(
    'Turista ' + turista +
    '\nNúmero de cidade visitadas: ' + count +
    '\nCidades visitadas:\n' + citys
)