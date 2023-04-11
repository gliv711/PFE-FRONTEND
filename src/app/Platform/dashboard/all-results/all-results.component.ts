import { Component, OnInit } from '@angular/core';
import { Resultat } from 'src/Models/Resultat';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {

  Resultats : Resultat[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
