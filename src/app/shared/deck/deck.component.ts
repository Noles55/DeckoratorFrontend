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
        this.cardLists = {};
        this.totalCardCount = this._deck.cards.length + this._deck.commander_cards.length;
        this._deck.cards.forEach(card => {
            if (!this.cardTypes.includes(card.primary_type)) {
                this.cardTypes.push(card.primary_type);
                this.cardLists[card.primary_type] = [];
            }
            this.cardLists[card.primary_type].push(card);
        });

        this.calculateBasicLandCounts();
        this.calculateFringeCardCounts();
    };

    get deck(): Deck {
      return this._deck;
    }

    totalCardCount;
    cardTypes: string[] = [];
    cardLists = {};
    fringeCards = [
      "Persistent Petitioners",
      "Rat Colony",
      "Relentless Rats",
      "Shadowborn Apostle",
      "Seven Dwarves"
    ];

    basicMap = {
      "W": "Plains",
      "U": "Island",
      "B": "Swamp",
      "R": "Mountain",
      "G": "Forest",
      "C": "Wastes"
    }

    constructor() { }

    ngOnInit() {
    }

    private calculateBasicLandCounts() {
      let basics: Card[] = [];
      this.cardLists['Land'].forEach(land => {
        if (land.super_types.includes("Basic")) basics.push(land);
      });

      let totalNumBasics: number = 100 - (this.totalCardCount - basics.length);
      let numEachBasic: number = Math.floor(totalNumBasics / basics.length);
      // Remainder being used as value and flag, remainder only added to land count of first color
      let remainder: number = totalNumBasics - (numEachBasic * basics.length);
      for (let i = 0; i < basics.length; i++) {
        basics[i].count = numEachBasic + remainder;
        remainder = 0;
      }

      this.totalCardCount = this.totalCardCount + totalNumBasics - basics.length;
    }

    private calculateFringeCardCounts() {
      if (this.totalCardCount == 100) return;

      this._deck.cards.forEach(card => {
        if (!this.fringeCards.includes(card.name)) return;
        card.count = 100 - this.totalCardCount;
      })
    }
}
