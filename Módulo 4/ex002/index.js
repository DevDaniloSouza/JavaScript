class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.coments = []
    }

    addComent(username, content) {
        this.coments.push(new Coment(username, content))
    }
}

class Coment {
    constructor(username, content) {
        this.username = username
        this.content = content
    }
}

class Author {
    constructor(fullname, posts) {
        this.name = fullname
        this.posts = []
    }

    writePost(title, body) {
        const post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}

const john = new Author("John Walker")

const post = john.writePost("Título", "Lorem ipsum dolor et sic...")

post.addComent("Danilo", "Muito interessante.")
post.addComent("Raphael", "Achei bem maneiro.")

console.log(john)
console.log(post)