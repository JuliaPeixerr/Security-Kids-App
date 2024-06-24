import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConfigPageComponent } from "./config-page.component";

@NgModule({
    declarations: [ConfigPageComponent],
    exports: [ConfigPageComponent],
    imports: [
        CommonModule
    ]
})

export class ConfigPageComponentModule {

}