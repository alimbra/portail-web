import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActualiteService } from '../service/actualite.service';
import { Actualite } from '../actualite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-actualite',
  templateUrl: './ajout-actualite.component.html',
  styleUrls: ['./ajout-actualite.component.scss']
})
export class AjoutActualiteComponent implements OnInit {

  publicationForm = this.fb.group({
    titre: ['', [Validators.required, Validators.minLength(3)]],
    contenu: ['', [Validators.required, Validators.minLength(10)] ],
  });
  constructor(private fb: FormBuilder,
              private actualiteService: ActualiteService,
              private router: Router) { }

  ngOnInit() {
  }

  get f() { return this.publicationForm.controls; }

  onSubmit() {

    if (this.publicationForm.invalid) {
      console.log(this.publicationForm.status);  // false

    } else {
      // console.log(this.publicationForm.value.titre);
      // console.log(this.publicationForm.value.contenu);
      // true

      this.actualiteService.addActualite(this.publicationForm.value)
      .then(() => {
        console.log('SUCCESS ');
        this.router.navigate(['/actualites']);
      })
      .catch( () => {
        console.log('UNSUCCESS ');
      });

    }

  }

}
