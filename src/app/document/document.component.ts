import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../section';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input()
  document :Section;
  
  constructor() { }

  ngOnInit() {
  }

}
