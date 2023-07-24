import { Account } from "./Account"

export class User {
    constructor(email, fullname) {
        this.email = email
        this.fullname = fullname
        this.account = new Account(this)
    }
}