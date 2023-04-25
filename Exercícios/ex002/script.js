const hero = prompt('Qual o nome do Herói?')
const power = prompt('Qual é o poder de ataque do Herói?')

const goblin = prompt('Qual o nome do Vilão?')
let pv = prompt('Quantos pontos de vida ele possui?')
const def = prompt('Quantos pontos de defesa ele possui?')
const shield = prompt('Ele possui um escudo? (Sim/Não)')

let damage = 0

if (power > def && shield === "Não") {
    damage = power - def
} else if (power > def && shield === "Sim") {
    damage = power - def / 2
}

pv -= damage

alert(hero + ' causou ' + damage + ' de dano ao vilão ' + goblin)
alert(
    hero + '\nPoder de Ataque: ' + power + '\n\n' +
    goblin + '\nPontos de Vida: ' + pv + 
    '\nPoder de Defesa: ' + def + '\nPossui escudo: ' + shield
)