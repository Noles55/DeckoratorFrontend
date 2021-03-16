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
          if (land.super_types.length === 2 && land.super_types.includes("Basic")) basics.push(land);
        });

        let totalBasics: number = this._deck.land_count - this.cardList['Land'].length + basics.length;
        let colorCounts: number[] = [];
        let totalColorCount = 0;

        this._deck.cards.forEach(card => {
          card.color_identity?.forEach(color => {
            let colorIndex: number = this._deck.color_identity.indexOf(color);
            if (!colorCounts[colorIndex]) colorCounts[colorIndex] = 0;
            colorCounts[this._deck.color_identity.indexOf(color)]++;
            totalColorCount++;
          });
        });

        let colorPercents: number[] = [];

        for (let i = 0; i < colorCounts.length; i++) {
          colorPercents[i] = colorCounts[i] / totalColorCount;
        }

        basics.forEach(basic => {
          basic.count = Math.round(colorPercents[this._deck.color_identity.indexOf(basic.color_identity[0])] * totalBasics);
        });
    }

    private indexOf(list: any[], element: any): number {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === element) return i;
      }
    }
}
