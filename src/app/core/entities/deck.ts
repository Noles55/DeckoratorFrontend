import { CommonModule } from '@angular/common';
import { Card } from './card';

export class Deck {
    commanders: string[];
    url: string;
    price: number;
    color_identity: string[];
    land_count: number;
    cards: Card[];

    constructor(obj: any) {
        this.commanders = obj.commanders;
        this.url = obj.url;
        this.price = obj.price;
        this.color_identity = obj.color_identity;
        this.land_count = obj.land_count;
        this.cards = obj.cards.map(cardJson => new Card(cardJson));
    }
}
