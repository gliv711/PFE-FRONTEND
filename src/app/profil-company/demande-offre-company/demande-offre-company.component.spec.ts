import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOffreCompanyComponent } from './demande-offre-company.component';

describe('DemandeOffreCompanyComponent', () => {
  let component: DemandeOffreCompanyComponent;
  let fixture: ComponentFixture<DemandeOffreCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeOffreCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeOffreCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
