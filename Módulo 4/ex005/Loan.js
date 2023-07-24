import { Installment } from "./Installment"

export class Loan {
    static #fee = 1.05

    constructor(loanValue, installments) {
        this.loanValue = loanValue
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((value * Loan.#fee) / installments, i))
        }
        this.date = new Date()
    }

    static get fee() {
        return Loan.#fee
    }

    static set fee(newFeePercentage) {
        Loan.#fee = 1 + (newFeePercentage / 100)
    }
}