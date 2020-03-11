import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from '../actualite';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {

  @Input()
  actualite: Actualite;
  constructor() { }

  ngOnInit() {
  }

}
