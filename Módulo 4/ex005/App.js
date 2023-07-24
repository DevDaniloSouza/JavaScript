import { Deposit } from "./Deposit"
import { Loan } from "./Loan"
import { Transfer } from "./Transfer"
import { User } from "./User"

export class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(email, fullname) {
        const userExists = App.findUser(email)
        if (!userExists) {
            this.#users.push(new User(email, fullname))
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static takeLoan(email, value, numberOfInstallments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newFee) {
        Loan.fee = newFee
    }
}

App.createUser('danilo@email.com', 'Danilo Souza')
App.createUser('raphael@email.com', 'Raphael Souza')
App.createUser('karol@email.com', 'Karol Bello')

App.deposit('danilo@email.com', 100)

App.transfer('danilo@email.com', 'raphael@email.com', 20)

App.changeLoanFee(10)

App.takeLoan('karol@email.com', 2000, 24)

console.log(App.findUser('danilo@email.com'))
console.log(App.findUser('danilo@email.com').account)
console.log(App.findUser('raphael@email.com'))
console.log(App.findUser('raphael@email.com').account)
console.log(App.findUser('karol@email.com'))
console.log(App.findUser('karol@email.com').account)