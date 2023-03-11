import { Component, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormBuilder, Validators } from "@angular/forms";
import Chart from 'chart.js/auto'
import { Observable } from 'rxjs';

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
  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  pieChart: any;
  aList:any;
  aListLength:any;
  aLogin: any[] = [];
  aFollowers: any[] = [];

  constructor(private apiservice: ApiService,  private router: Router,private formBuilder: FormBuilder  ) {
  }

  ngOnInit() {
    this.searchUsers = this.formBuilder.group({
      search: ['', [Validators.minLength(4)]],
    });
   
  }
  
  ngAfterContentInit(): void {    
    this.pieChartBrowser();
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
  
  pieChartBrowser(): void {
    this.apiservice.getUsers('').subscribe(list => {
      this.list = list;
      this.aList = list.items;
      this.aListLength = this.aList.slice(this.aList.length - 10)
   
      for (let i = 0; i < this.aListLength.length; i++) {
        const element = this.aListLength[i];
        this.apiservice.getFindUsers(element.login).then(datos => {
          this.aLogin.push(datos.login);
          this.aFollowers.push(datos.followers);
          
        });
        
      }
    });  
    console.log(this.aLogin)
    console.log(this.aFollowers)
    setTimeout(() => {
      var dataLabel = this.aLogin
      var dataValue = this.aFollowers
      this.canvas = this.pieCanvas.nativeElement;
      this.ctx = this.canvas.getContext('2d');
      this.pieChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: dataLabel,
          datasets: [
            {
              backgroundColor: [
                '#2ecc71',
                '#3498db',
                '#95a5a6',
                '#9b59b6',
                '#f1c40f',
                '#e74c3c',
                '#0dcaf0',
                '#212529',
                '#6610f2',
                '#0d6efd',
              ],
              data: dataValue,
            },
          ],
        },
      });
    }, 2000);
      
  }
}
