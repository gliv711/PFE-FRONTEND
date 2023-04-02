import { Component, OnInit } from '@angular/core';
//@ts-ignore
import Typewriter from "t-writer.js";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })
    
    writer
    .strings(
      5000,
      "Booster votre carrière professionnelle",
      "Optimiser votre profil pour plus d'opportunités", 
      "Gagnez du temps dans votre recherche d'emploi",
      "réussir votre carrière",
      "Optimisez Vos compétences au service de votre avenir professionnel",
      "Être Le point de départ de votre avenir professionnel"
    )
    .start();
  
    
  }
}
