import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book/book.service';
import { Book } from '../../models/book/book.model';

@Component({
    selector: 'module-hot-book',
    templateUrl: '/app/modules/hot_book/hot_book.component.html'
})
export class ModHotBookComponent implements OnInit {
    hot_books: Book[];

    constructor(private book_service: BookService) {
        // this.book_service.getHotBooks()
        //     .then(books => this.hot_books = books);
    }

    ngOnInit() { }
}