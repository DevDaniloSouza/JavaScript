export class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.array.forEach(({product, quantity}) => {
            if (quantity > product.inStock) {
                throw new Error('Quantidade insuficiente no estoque!')
            }
        });
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0)
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}