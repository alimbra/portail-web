import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutActualiteComponent } from './ajout-actualite.component';

describe('AjoutActualiteComponent', () => {
  let component: AjoutActualiteComponent;
  let fixture: ComponentFixture<AjoutActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
