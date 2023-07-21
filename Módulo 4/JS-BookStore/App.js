import { Database } from "./Database";
import { Book } from "./entites/Book";
import { Order } from "./entites/Order";
import { Post } from "./entites/Poster";
import { User } from "./entites/User";
import { Author } from "./entitites/Author";

export class App {
    static #database = new Database

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster(name, description, height, width, price, inStock) {
        const post = new Post(name, description, height, width, price, inStock)
        App.#database.savePoster(post)
    }

    addPosters(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Post) {
                App.#database.removePostersFromStock(product.name, quantity)
            }
        });
    }

    getOrders() {
        App.#database.find('orders')
    }

    showDataBase() {
        App.#database.showStorage()
    }
}