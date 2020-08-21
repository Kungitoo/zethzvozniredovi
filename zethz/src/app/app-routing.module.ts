import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZethzComponent } from './zethz/zethz.component';

const routes: Routes = [
  { path: '**', component: ZethzComponent },  // Wildcard route for a 404 page];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
