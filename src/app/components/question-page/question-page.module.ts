import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionPageComponent } from './question-page.component';

@NgModule({
    declarations: [QuestionPageComponent],
    exports: [QuestionPageComponent],
    imports: [
        CommonModule
    ]
})
export class QuestionPageComponentModule { }