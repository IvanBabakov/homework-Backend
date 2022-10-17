interface Book {    
    id: string;
    title: string;
    description?: string;
    author: string;
    favorite?: boolean;
    fileCover?: string;
    fileName?: string;
    fileBook?: string;
}

class BooksRepository {
    repository: Book[]

    constructor() {
        this.repository = []
    }

    createBook(book: Book){
        this.repository.push(book)
    }
    getBook(id: string){
        return this.repository.find(x => x.id === id);       
    }
    getBooks(){
        return this.repository
    }
    updateBook(id: string){
        return this.repository.find(x => x.id === id);

    }
    deleteBook(id: string){
        this.repository = this.repository.filter(x => x.id !== id)       
    }
}