import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Aplicativos } from "src/app/domain/apps";


@Component({
    selector: 'config-page',
    templateUrl: './config-page.component.html',
    styleUrls: ['./config-page.component.scss']
})

export class ConfigPageComponent implements OnInit {

    apps: Aplicativos[] = [];
    constructor() { }
    ngOnInit(): void {
        this.getApps();
    }

    private getApps() {
        const apps: Aplicativos[] = [
            {
                id: 1,
                nome: 'Instragram'
            },
            {
                id: 2,
                nome: 'Facebook'
            },
            {
                id: 3,
                nome: 'ZAP ZAP'
            },            
            {
                id: 4,
                nome: 'Telegram'
            },
            {
                id: 5,
                nome: 'OnlyFans'
            }];
    this.apps = apps;
    }
}