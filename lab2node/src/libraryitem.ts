interface LibraryItem {
    title: string
    author: string
    borrowed: boolean
    borrow(): void
}

class Book implements LibraryItem {
    public title: string
    public author: string
    public borrowed: boolean
    public pages: number

    constructor(title: string, author: string, pages: number) {
        this.title = title
        this.author = author
        this.pages = pages
        this.borrowed = false
    }

    public borrow(): void {
        this.borrowed = true
    }
}

class Magazine implements LibraryItem {
    public title: string
    public author: string
    public borrowed: boolean
    public chapter: number

    constructor(title: string, author: string, chapter: number) {
        this.title = title
        this.author = author
        this.chapter = chapter
        this.borrowed = false
    }

    public borrow(): void {
        this.borrowed = true
    }
}

class DVD implements LibraryItem {
    public title: string
    public author: string
    public borrowed: boolean
    public duration: number

    constructor(title: string, author: string, duration: number) {
        this.title = title
        this.author = author
        this.duration = duration
        this.borrowed = false
    }

    public borrow(): void {
        this.borrowed = true
    }
}

class Library {
    private items: LibraryItem[]

    constructor() {
        this.items = []
    }

    public addItem(item: LibraryItem): void {
        this.items.push(item)
    }

    public findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(i => i.title === name)
    }

    public listAvailable(): void {
        this.items
            .filter(i => !i.borrowed)
            .forEach(i => {
                console.log(`title: ${i.title}, author: ${i.author}`)
            })
    }
}

const lib = new Library()

const book1 = new Book("the green mile", "stephen king", 328)
const mag1 = new Magazine("batman year one", "dc comics", 42)
const dvd1 = new DVD("inception", "christopher nolan", 148)

lib.addItem(book1)
lib.addItem(mag1)
lib.addItem(dvd1)

lib.listAvailable()

book1.borrow()
const found = lib.findItemByName("the green mile")
console.log(`found: ${found?.title}, borrowed: ${found?.borrowed}`)

lib.listAvailable()
