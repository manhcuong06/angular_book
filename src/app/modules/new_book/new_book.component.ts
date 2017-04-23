import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book/book.service';
import { Book } from '../../models/book/book.model';

@Component({
    selector: 'module-new-book',
    templateUrl: '/app/modules/new_book/new_book.component.html'
})
export class ModNewBookComponent implements OnInit {
    new_books: Book[];

    constructor(private book_service: BookService) {
        // this.book_service.getNewBooks()
        //     .then(books => this.new_books = books);
    }

    ngOnInit() { }
}