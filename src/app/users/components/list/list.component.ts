import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  list: any;
  pageSize: any;
  page: any;
  constructor(private apiservice: ApiService,  private router: Router  ) {
  }

  ngOnInit() {
    this.apiservice.getUsers().subscribe((list: any) => (this.list = list));
  }
}
