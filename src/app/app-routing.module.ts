import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/components/list/list.component';
import { FindComponent } from './users/components/find/find.component';
import { ListGuard } from './users/guards/list.guard';
const routes: Routes = [
  { path: '', component: ListComponent,  
    pathMatch: 'full', 
    canActivate: [ListGuard],
    data: {
      login: ''
    }},
  { path: 'find/:login', component: FindComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
