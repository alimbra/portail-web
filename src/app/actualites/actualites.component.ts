import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../service/actualite.service';
import { Observable } from 'rxjs';
import { Actualite } from '../actualite';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  actualites: Actualite[];
  constructor(private actualiteService: ActualiteService) { }

  ngOnInit() {
    this.actualiteService.actualites().subscribe( (news) => {
      this.actualites = news;
    });
  }



}
