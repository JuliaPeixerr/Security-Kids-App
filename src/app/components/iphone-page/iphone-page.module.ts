import { CommonModule } from '@angular/common';
import { IphonePageComponent } from './iphone-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [IphonePageComponent],
    exports: [IphonePageComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class IphonePageComponentModule { }