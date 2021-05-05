import { NotificationService } from '../../core/services/notification.service';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/entities/card';

@Component({
  selector: 'card-type-list',
  templateUrl: './card-type-list.component.html',
  styleUrls: ['./card-type-list.component.css']
})
export class CardTypeListComponent implements OnInit {

  @Input() cardType: string;
  cardCount: number;

  private _cardList: Card[];

  @Input() set cardList(value: Card[]) {
    this._cardList = value;
    this.cardCount = 0;
    value.forEach(card => this.cardCount += card.count)
  };

  get cardList(): Card[] {
    return this._cardList;
  }

  constructor() {
  }

  ngOnInit() {

  }

 }
