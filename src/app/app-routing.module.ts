import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPageComponent } from './components/question-page';
import { ConfigPageComponent, IphonePageComponent } from './components';

const routes: Routes = [
  { path: '', component: IphonePageComponent },
  { path: 'question', component: QuestionPageComponent },
  { path: 'config', component: ConfigPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
