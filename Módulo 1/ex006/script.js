let num = parseFloat(prompt('Digite o número que gostaria de tabuar:'))
let result = ''

for (let num2 = 1; num2 <= 20; num2++) {
    result += '> ' + num + ' x ' + num2 + '=' + num*num2 + '\n'
}

alert('Tabuada do número ' + num + '\n\n' + result)