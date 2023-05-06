import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionInsideSurveyformComponent } from './addquestion-inside-surveyform.component';

describe('AddquestionInsideSurveyformComponent', () => {
  let component: AddquestionInsideSurveyformComponent;
  let fixture: ComponentFixture<AddquestionInsideSurveyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestionInsideSurveyformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquestionInsideSurveyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
