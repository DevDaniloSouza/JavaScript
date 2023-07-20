class Character {
    constructor(name, lifePoints, attack, defense) {
        this.name = name
        this.lifePoints = lifePoints
        this.attack = attack
        this.defense = defense
    }

    attackAction(target) {
        let damage = this.attack - target.defense
        target.lifePoints -= damage
    }
}

class Thief extends Character {
    constructor(name, lifePoints, attack, defense) {
        super(name, lifePoints, attack, defense)
    }

    attackAction(target) {
        target.lifePoints -= (this.attack - target.defense) * 2
    }
}

class Mage extends Character {
    constructor(name, lifePoints, attack, defense, magicPoints) {
        super(name, lifePoints, attack, defense)
        this.magicPoints = magicPoints
    }

    attackAction(target) {
        target.lifePoints -= this.attack + this.magicPoints - target.defense
    }

    healAction(target) {
        target.lifePoints += this.magicPoints * 2
    }
}

class Warrior extends Character {
    constructor(name, lifePoints, attack, defense, shild, position) {
        super(name, lifePoints, attack, defense)
        this.shild = shild
        this.position = position
    }

    attackAction(target) {
        if (this.position = 'Ataque') {
            target.lifePoints -= this.attack - target.defense
        }
    }

    changePosition() {
        if (this.position === 'Ataque') {
            this.position = 'Defesa'
            this.defense += this.shild
        } else {
            this.position = 'Ataque'
            this.defense -= this.shild
        }
    }
}

let hero = new Character('Jack', 100, 20, 20)
let thief = new Thief('Morgan', 80, 30, 20)
let mage = new Mage('Magnus', 60, 20, 10, 20)
let warrior = new Warrior('Annorak', 160, 40, 10, 20, 'Ataque')