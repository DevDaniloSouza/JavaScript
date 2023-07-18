class User {
    constructor(fullname, email, password) {
        this.name = fullname
        this.email = email
        this.password = password
    }

    login(Email, Senha) {
        if (this.email === Email && this.password === Senha) {
            console.log('Login realizado com sucesso!')
        } else {
            console.log('Falha ao fazer login, tente novamente!')
        }
    }
}

let Me = new User("Danilo Souza", "danilo@email.com", "7404")

console.log(Me)
Me.login("danilo@email.com", "7404")

class Product {
    constructor(name, description, price, inStock) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(amount) {
        return this.inStock += amount
    }

    discont(percent) {
        return this.price * ((100 - percent) / 100)
    }
}

let myProduct = new Product("Violão", "Instrumento musical", 400, 20)

console.log(myProduct)
myProduct.addToStock(40)

const withDiscont = myProduct.discont(50)

console.log(withDiscont)