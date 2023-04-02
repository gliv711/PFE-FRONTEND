import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGernalComponent } from './information-gernal.component';

describe('InformationGernalComponent', () => {
  let component: InformationGernalComponent;
  let fixture: ComponentFixture<InformationGernalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationGernalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationGernalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
