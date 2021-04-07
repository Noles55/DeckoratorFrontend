import { environment } from './../../../environments/environment';
import { TrainingDeckDto } from './../entities/trainingDeckDto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '../entities/deck';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeckService {


  constructor(private http: HttpClient) {

  }

  getRandomDeck(): Observable<any> {
    return this.http.get(environment.backendBaseUrl + "/randomDeck").pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  submitTrainingDeck(deck: Deck, rating: number) {

    let trainingData: TrainingDeckDto = new TrainingDeckDto(deck.commander_cards, deck.cards, rating);
    this.http.post(environment.backendBaseUrl + "/trainingDeck", JSON.stringify(trainingData)).pipe(
      retry(3),
      catchError(this.handleError)
    ).subscribe();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occured:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError("Something bad happened. Please refresh or try again later");
  }
}

