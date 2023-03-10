import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
  find: any;

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let login = params['login'];
      this.apiservice.getFindUsers(login).subscribe((list: any) => (this.find = list));
    });
  }
}
