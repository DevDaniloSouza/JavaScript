class Component {
    #element

    constructor(tag, parent, options) {
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    getElement() {
        return this.#element
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this
    }

    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}

class Input extends Component {
    constructor(parent, options) {
        super('input', parent, options)
    }
}

class Label extends Component {
    constructor(text, parent, options) {
        super('label', parent, Object.assign({}, options, { textContent: text }))
    }
}

class Form extends Component {
    constructor(parent, options) {
        super('form', parent, options)
    }

    addChildren(...children){
            children.forEach(child => {
                this.getElement().appendChild(child.getElement())
            })
    }
}

const title = new Component('h1', 'body', { textContent: 'Olá, mundo!' })
console.log(title)
title.render()

const form = new Form('body')
const label = new Label('Nome:', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'name'})

form.render()
label.render()

form.addChildren(input)