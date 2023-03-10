import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  list: any;
  pageSize: any;
  page: any;
  search:any;
  searchUsers: any;
  alert:boolean=false;
  alertMsm:string = '';
  constructor(private apiservice: ApiService,  private router: Router,private formBuilder: FormBuilder  ) {
  }

  ngOnInit() {
    this.searchUsers = this.formBuilder.group({
      search: ['', [Validators.minLength(4)]],
    });
    this.apiservice.getUsers('').subscribe((list: any) => (this.list = list));
  }
  
  onSubmit(){
    if (this.searchUsers.invalid) {
      this.alert = true
      this.alertMsm = 'Mínimo de 4 caracteres se requiere'
      return;
    }
    if (this.searchUsers.get('search').value == "doublevpartners" ) {
      this.alert = true
      this.alertMsm = 'No se permite buscar doublevpartners'
      return;
    }
    this.alert = false
    this.apiservice.getUsers(this.searchUsers.get('search').value).subscribe((list: any) => (this.list = list));
  }
}
