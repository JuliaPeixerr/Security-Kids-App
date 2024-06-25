import { Component, Input } from '@angular/core';

@Component({
    selector: 'answer-dialog',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss']
})
export class AnswerDialog {
    @Input() rigth: boolean = false;

    constructor() { }
}