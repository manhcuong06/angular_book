import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'module-header',
    templateUrl: '/app/widgets/header/header.component.html'
})
export class ModHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        setTimeout(function() {
            $(document).ready(function() {
                $("#myBtn").click(function() {
                    $("#myModal").modal();
                });
            });
        }, 0);
    }
}