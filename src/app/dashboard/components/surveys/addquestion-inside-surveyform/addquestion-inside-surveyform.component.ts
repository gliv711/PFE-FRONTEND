import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addquestion-inside-surveyform',
  templateUrl: './addquestion-inside-surveyform.component.html',
  styleUrls: ['./addquestion-inside-surveyform.component.css']
})
export class AddquestionInsideSurveyformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemsPerPage = 10;
  currentPage = 1;
}
