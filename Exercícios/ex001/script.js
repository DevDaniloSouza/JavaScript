let n1 = document.getElementById('iname1')
let v1 = document.getElementById('ivel1')
let n2 = document.getElementById('iname2')
let v2 = document.getElementById('ivel2')

let vel1 = Number(v1)
let vel2 = Number(v2)

function Verificar() {
    if (vel1.value > vel2.value) {
        res.innerHTML = `<p>O carro ${n1} é o carro mais rápido</p>`
    } if else (vel2.value > vel1.value) {
        res.innerHTML = `<p>O carro ${n2} é o carro mais rápido</p>`
    } else {
        res.innerHTML = `<p>Os carros possuem a mesma velocidade</p>`
    }
}