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
        setTimeout(() => {
            this.new_books = this.book_service.all_books.slice(0, 8);
        }, 500);
    }

    ngOnInit() { }
}