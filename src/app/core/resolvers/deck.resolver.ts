import { DeckService } from '../services/deck.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Deck } from '../entities/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckResolver implements Resolve<Deck> {
  constructor(private deckService: DeckService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Deck> {
    return of(this.deckService.getRandomDeck());
  }
}
