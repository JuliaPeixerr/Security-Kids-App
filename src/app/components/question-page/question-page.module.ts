import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionPageComponent } from './question-page.component';
import { AnswerDialog } from './dialog/answer.component';

@NgModule({
    declarations: [QuestionPageComponent, AnswerDialog],
    exports: [QuestionPageComponent],
    imports: [
        CommonModule
    ]
})
export class QuestionPageComponentModule { }