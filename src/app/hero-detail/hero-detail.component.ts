import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  // se usa @Input para hacer que la hero propiedad
  // esté disponible para la vinculación externa HeroesComponent.

  constructor() { }

  ngOnInit() {
  }


}
