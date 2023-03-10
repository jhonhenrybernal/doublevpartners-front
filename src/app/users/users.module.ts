import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { FindComponent } from './components/find/find.component';



@NgModule({
  declarations: [
    ListComponent,
    FindComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
