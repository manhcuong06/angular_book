import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book/book.service';
import { Book } from '../../models/book/book.model';

@Component({
    selector: 'page-home',
    templateUrl: '/app/pages/home/home.component.html'
})
export class PageHomeComponent implements OnInit {
    books: Book[];

    constructor(private book_service: BookService) {
        this.book_service.getAllBooks()
            .then(books => this.books = books)
        ;
    }

    ngOnInit() { }
}