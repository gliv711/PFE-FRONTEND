import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  Onclick(){
    this.router.navigate(['/alerts']);
}

}
