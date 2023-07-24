export class Transfer {
    constructor(frommUser, toUser, value) {
        this.fromUser = frommUser
        this.toUser = toUser
        this.value = value
        this.date = new Date()
    }
}