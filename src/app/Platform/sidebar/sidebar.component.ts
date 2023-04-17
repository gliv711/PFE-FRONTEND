import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    hamburger.addEventListener("click", () => {
      document.querySelector("body")!.classList.toggle("active");
    });
  }

}
