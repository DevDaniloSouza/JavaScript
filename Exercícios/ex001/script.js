const n1 = prompt('Informe o nome do primeiro veículo:')
const v1 = prompt('Informe a velocidade do primeiro veículo:')
const n2 = prompt('Informe o nome do segundo veículo:')
const v2 = prompt('Informe a velocidade do segundo veículo:')

if (v1 > v2) {
    alert(n1 + "é mais rápido que" + n2)
} else if (v2 > v1) {
    alert(n2 + 'é mais rápido que' + n1)
} else {
    alert(n1 + 'e' + n2 + 'possuem a mesma velocidade')
}