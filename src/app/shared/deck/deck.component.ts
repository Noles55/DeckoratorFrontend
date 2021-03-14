import { NotificationService } from './../../core/services/notification.service';
import { Component, Input, OnInit } from '@angular/core';
import { Deck } from 'src/app/core/entities/deck';

@Component({
    selector: 'deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {

    private _deck: Deck;

    @Input() set deck(value: Deck) {
        this._deck = value;
        this.cardTypes = [];
        this.cardList = {};
        this._deck.cards.forEach(card => {
            if (!this.cardTypes.includes(card.primary_type)) this.cardTypes.push(card.primary_type);
            if (!this.cardList[card.primary_type]) this.cardList[card.primary_type] = [];
            this.cardList[card.primary_type].push(card);
        });
    };

    get deck(): Deck {
      return this._deck;
    }

    cardTypes: string[] = [];
    cardList = {};

    constructor() { }

    ngOnInit() {

    }
}
