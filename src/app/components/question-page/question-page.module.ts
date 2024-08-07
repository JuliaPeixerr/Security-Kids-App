import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionPageComponent } from './question-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [QuestionPageComponent],
    exports: [QuestionPageComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class QuestionPageComponentModule { }