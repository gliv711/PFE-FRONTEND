import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCompanyComponent } from './settings-company.component';

describe('SettingsCompanyComponent', () => {
  let component: SettingsCompanyComponent;
  let fixture: ComponentFixture<SettingsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
