import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockedPageComponent } from './blocked-page.components';

@NgModule({
    declarations: [BlockedPageComponent],
    exports: [BlockedPageComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class BlockedPageComponentModule { }