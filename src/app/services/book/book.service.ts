import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import params_local = require('../../params/params_local');
import params = require('../../params/params');

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
    api_path: string = 'http://172.23.34.100:81/service_api/api_service_sach.php?task=';
    images_path = `${params_local.service_api_domain}images/sach/`;

    constructor(private http: Http) { }

    getNewBooks(): Promise<any[]> {
        return this.http.get(this.api_path + 'sach_moi')
            .toPromise()
            .then((res: Response) => res.json());
    }

    getHotBooks(): Promise<any[]> {
        return this.http.get(this.api_path + 'sach_noi_bat')
            .toPromise()
            .then((res: Response) => res.json());
    }
}