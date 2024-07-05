import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'iphone-page',
    templateUrl: './iphone-page.component.html',
    styleUrls: ['./iphone-page.component.scss']
})
export class IphonePageComponent implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.timeout();
    }

    private timeout() {
        setTimeout(() => {
            this.router.navigate(['question']);
        }, 20000);
    }

    config() {
        this.router.navigate(['config']);
    }
}