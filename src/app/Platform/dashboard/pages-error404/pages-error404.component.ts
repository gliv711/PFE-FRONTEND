import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-error404',
  templateUrl: './pages-error404.component.html',
  styleUrls: ['./pages-error404.component.css']
})
export class PagesError404Component implements OnInit {

  constructor(private router: Router) {}

  

  ngOnInit(): void {
    setTimeout(() => {
      history.back();
    }, 4000);
  }

}
