"use strict";
var BooksRepository = /** @class */ (function () {
    function BooksRepository() {
        this.repository = [];
    }
    BooksRepository.prototype.createBook = function (book) {
        this.repository.push(book);
    };
    BooksRepository.prototype.getBook = function (id) {
        return this.repository.find(function (x) { return x.id === id; });
    };
    BooksRepository.prototype.getBooks = function () {
        return this.repository;
    };
    BooksRepository.prototype.updateBook = function (id) {
        return this.repository.find(function (x) { return x.id === id; });
    };
    BooksRepository.prototype.deleteBook = function (id) {
        this.repository = this.repository.filter(function (x) { return x.id !== id; });
    };
    return BooksRepository;
}());
