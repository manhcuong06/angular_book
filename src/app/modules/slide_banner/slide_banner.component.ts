import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'module-slide-banner',
    templateUrl: '/app/modules/slide_banner/slide_banner.component.html'
})
export class ModSlideBannerComponent implements OnInit {
    images_path = 'http://api.yii2.cuong.dev/images/slide_banner/';
    constructor() { }

    ngOnInit() { }
}