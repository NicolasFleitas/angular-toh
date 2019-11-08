import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) { }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // reemplazamos la funcion anterior con la sgte

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heores');
    return of(HEROES);
  }

}
