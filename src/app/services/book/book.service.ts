import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from '../../models/book/book.model';
import params_local = require('../../params/params_local');
import params = require('../../params/params');

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
    api_path    = `${params_local.service_api_domain}book/`;
    images_path = `${params_local.service_api_domain}images/sach/`;
    all_books: Book[];

    constructor(private http: Http) { }

    getAllBooks(): Promise<Book[]> {
        return this.http.get(`${this.api_path}all`)
            .toPromise()
            .then((res: Response) => this.all_books = res.json())
        ;
    }
}