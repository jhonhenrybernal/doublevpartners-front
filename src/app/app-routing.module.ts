import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/components/list/list.component';
import { FindComponent } from './users/components/find/find.component';
const routes: Routes = [
  { path: '', component: ListComponent,  pathMatch: 'full'},
  { path: 'find', component: FindComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
