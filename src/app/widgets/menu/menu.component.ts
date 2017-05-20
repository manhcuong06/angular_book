import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'module-menu',
    templateUrl: '/app/widgets/menu/menu.component.html'
})
export class ModMenuComponent implements OnInit {
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