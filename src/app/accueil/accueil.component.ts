import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() {
    localStorage.getItem('monObjet');
    console.log(localStorage.getItem('monObjet'));
    
  }

  ngOnInit() {
  }

}
