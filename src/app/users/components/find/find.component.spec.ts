import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { FindComponent } from './find.component';
import { ApiService } from '../../services/api.service';

describe('FindComponent', () => {
  let component: FindComponent;
  let fixture: ComponentFixture<FindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindComponent],
      imports: [HttpClientModule], // Importar HttpClientModule
      providers: [
        ApiService,
        {
          provide: ActivatedRoute,
          useValue: { params: of({ login: 'testLogin' }) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
