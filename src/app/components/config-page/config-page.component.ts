import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Aplicativos } from "src/app/domain/apps";
import { Contatos } from "src/app/domain/contatos";


@Component({
    selector: 'config-page',
    templateUrl: './config-page.component.html',
    styleUrls: ['./config-page.component.scss']
})

export class ConfigPageComponent implements OnInit {
    apps: Aplicativos[] = [];
    contatos: Contatos[] = [];

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getApps();
        this.getNumbers();
    }

    gravar() {
        this.router.navigate(['/'])
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

    private getNumbers() {
        const apps: Contatos[] = [
            {
                id: 5,
                nome: 'Jefrey',
                numero: '7070-7070'
            },
            {
                id: 1,
                nome: 'Mãe',
                numero: '7070-7070'
            },
            {
                id: 2,
                nome: 'Pai',
                numero: '7070-7070'
            },
            {
                id: 3,
                nome: 'Lucas',
                numero: '7070-7070'
            },
            {
                id: 4,
                nome: 'Cleverson',
                numero: '7070-7070'
            },
            {
                id: 5,
                nome: 'Jefrey',
                numero: '7070-7070'
            }];
        this.contatos = apps;
    }
}