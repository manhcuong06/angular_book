import { Component, OnInit } from '@angular/core';

import { BannerService } from '../../services/banner/banner.service';
import { Banner } from '../../models/banner/banner.model';

@Component({
    selector: 'module-banner',
    templateUrl: '/app/modules/banner/banner.component.html'
})
export class ModBannerComponent implements OnInit {
    banners: Banner[];

    constructor(private banner_service: BannerService) {
        this.banner_service.getBanners()
            .then(banners => this.banners = banners)
        ;
    }

    ngOnInit() { }
}