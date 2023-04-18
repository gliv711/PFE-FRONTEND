import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstepsComponent } from './topsteps.component';

describe('TopstepsComponent', () => {
  let component: TopstepsComponent;
  let fixture: ComponentFixture<TopstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopstepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
