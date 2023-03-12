import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Chart from 'chart.js/auto';
import { ApiService } from '../../services/api.service';
import { ListComponent } from './list.component';

let component: ListComponent;
let fixture: ComponentFixture<ListComponent>;

describe('ListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ ApiService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});