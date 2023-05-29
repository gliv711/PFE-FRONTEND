import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-company',
  templateUrl: './profil-company.component.html',
  styleUrls: ['./profil-company.component.css']
})
export class ProfilCompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
