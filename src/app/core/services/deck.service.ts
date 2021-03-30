import { TrainingDeckDto } from './../entities/trainingDeckDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '../entities/deck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  baseUrl = "https://5n624rn132.execute-api.us-east-1.amazonaws.com";

  constructor(private http: HttpClient) {

  }

  getRandomDeck(): Observable<any> {
    return this.http.get(this.baseUrl + "/randomDeck");
  }

  submitTrainingDeck(deck: Deck, rating: number) {

    let trainingData: TrainingDeckDto = new TrainingDeckDto(deck.commander_cards, deck.cards, rating);
    console.log(trainingData);
    //this.http.post(this.baseUrl + "/trainingDeck",);
  }
}
