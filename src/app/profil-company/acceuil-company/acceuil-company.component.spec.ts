import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilCompanyComponent } from './acceuil-company.component';

describe('AcceuilCompanyComponent', () => {
  let component: AcceuilCompanyComponent;
  let fixture: ComponentFixture<AcceuilCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
