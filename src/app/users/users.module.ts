import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { FindComponent } from './components/find/find.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ListComponent,
    FindComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule
  ],
})
export class UsersModule { }
