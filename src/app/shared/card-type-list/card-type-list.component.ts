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
  @Input() cardList: Card[];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  selectCard(card: Card) {
    this.notificationService.sendEvent<Card>("selectCard", card)
  }

}
