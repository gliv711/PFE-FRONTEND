import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgreebarComponent } from './progreebar.component';

describe('ProgreebarComponent', () => {
  let component: ProgreebarComponent;
  let fixture: ComponentFixture<ProgreebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgreebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgreebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
