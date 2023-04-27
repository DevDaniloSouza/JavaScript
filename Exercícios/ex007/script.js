const word = prompt('Informe uma palavra:')
let drow = ''

for (let i = word.length - 1; i >= 0; i--) {
    drow += word[i]
}

if (word === drow) {
    alert("A palavra '" + word + "' é um palíndromo!\n\n" + drow)
} else {
    alert(
        "A palavra '" + word + "' não é um palíndromo!" +
        "\n\n" + word + ' !== ' + drow
        )
}