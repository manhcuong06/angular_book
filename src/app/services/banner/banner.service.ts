import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Banner } from '../../models/banner/banner.model';
import params_local = require('../../params/params_local');
import params = require('../../params/params');

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BannerService {
    api_path    = `${params_local.service_api_domain}banner/`;
    images_path = `${params_local.service_api_domain}images/slide_banner/`;

    constructor(private http: Http) { }

    getBanners(): Promise<Banner[]> {
        return this.http.get(this.api_path)
            .toPromise()
            .then((res: Response) => res.json() as Banner[])
        ;
    }
}