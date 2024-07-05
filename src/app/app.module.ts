import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IphonePageComponentModule, QuestionPageComponentModule } from './components';
import { ConfigPageComponentModule } from './components/config-page/config-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionPageComponentModule,
    ConfigPageComponentModule,
    IphonePageComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
