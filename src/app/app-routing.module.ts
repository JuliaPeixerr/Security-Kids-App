import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPageComponent } from './components/question-page';
import { ConfigPageComponent, IphonePageComponent } from './components';
import { BlockedPageComponent } from './components/blocked-page/blocked-page.components';

const routes: Routes = [
  { path: '', component: IphonePageComponent },
  { path: 'question', component: QuestionPageComponent },
  { path: 'config', component: ConfigPageComponent },
  { path: 'block', component: BlockedPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
