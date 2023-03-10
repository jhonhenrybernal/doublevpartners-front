import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { FindComponent } from './components/find/find.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    FindComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class UsersModule { }
