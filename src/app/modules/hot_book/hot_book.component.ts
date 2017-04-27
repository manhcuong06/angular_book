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
        setTimeout(() => {
            this.hot_books = this.book_service.all_books.filter(book => book.noi_bat == 1);
        }, 500);
    }

    ngOnInit() { }
}