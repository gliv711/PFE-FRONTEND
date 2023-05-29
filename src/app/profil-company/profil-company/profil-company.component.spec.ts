import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCompanyComponent } from './profil-company.component';

describe('ProfilCompanyComponent', () => {
  let component: ProfilCompanyComponent;
  let fixture: ComponentFixture<ProfilCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
