import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '../entities/deck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) {

  }

  getRandomDeck(): Observable<any> {
    return this.http.get("https://5n624rn132.execute-api.us-east-1.amazonaws.com/randomDeck");
  }
}
