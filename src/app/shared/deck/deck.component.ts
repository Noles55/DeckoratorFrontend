import { Component, Input, OnInit } from '@angular/core';
import { Deck } from 'src/app/core/entities/deck';
import { Card } from 'src/app/core/entities/card';

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
            if (!this.cardTypes.includes(card.primary_type)) {
                this.cardTypes.push(card.primary_type);
                this.cardList[card.primary_type] = [];
            }
            this.cardList[card.primary_type].push(card);
        });

        this.calculateBasicLandCounts();
    };

    get deck(): Deck {
      return this._deck;
    }

    cardTypes: string[] = [];
    cardList = {};

    constructor() { }

    ngOnInit() {
    }

    private calculateBasicLandCounts() {
        let basics: Card[] = [];
        this.cardList['Land'].forEach(land => {
          if (land.super_types.includes("Basic")) basics.push(land);
        });

        let totalBasics: number = this._deck.land_count - this.cardList['Land'].length + basics.length;
        let numEachBasic = Math.round(totalBasics / basics.length);
        let i = 0;
        for (i; i < basics.length - 1; i++) {
          basics[i].count = numEachBasic;
        }

        basics[i].count = totalBasics - numEachBasic * i;
    }
}
