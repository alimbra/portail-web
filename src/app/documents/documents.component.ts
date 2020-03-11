import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {


  documents: Section[];

  constructor(private documentService: DocumentService) {
    this.documentService.documents().subscribe( (docs) => {
      this.documents = docs;
      this.documents.forEach(element => {
        this.documentService.getStoredFiles(element.nom)
        .then((link) => {
          console.log(link);
          element.lien = link;

        });
      });
    });
  }

  ngOnInit() {
    console.log(this.documents);

  }

}
