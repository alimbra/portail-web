import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DocumentService } from '../service/document.service';
import { Router } from '@angular/router';
import { Section } from '../section';

@Component({
  selector: 'app-ajout-document',
  templateUrl: './ajout-document.component.html',
  styleUrls: ['./ajout-document.component.scss']
})
export class AjoutDocumentComponent implements OnInit {

  ajoutDocumentForm = this.fb.group(
  { 
    titre:['',[Validators.required,Validators.minLength(3)]],
    fichier:[null,[Validators.required] ],
  });
    
  constructor(private fb:FormBuilder,
    private router:Router,
    private documentService:DocumentService) { }
  
  ngOnInit() {
  }

  get f() { return this.ajoutDocumentForm.controls; }

  onSubmit(){
  }
  upload(event){
    this.documentService.storeFile(event)
    .subscribe( (progression)=>{
      if(progression == 100){
        console.log("fini");
        let section:Section = {nom:event.target.files[0]['name'],lien:''};
        this.documentService.addDocument(section)
        .then(() => {
          this.router.navigate(['documents']);
        });
      }
    });
  }

}
