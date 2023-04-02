import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  Onclick(){
    this.router.navigate(['/badges']);
}
}
