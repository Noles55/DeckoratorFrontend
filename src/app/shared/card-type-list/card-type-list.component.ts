import { NotificationService } from './../../core/services/notification.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-type-list',
  templateUrl: './card-type-list.component.html',
  styleUrls: ['./card-type-list.component.css']
})
export class CardTypeListComponent implements OnInit {

  @Input() cardType: string;
  @Input() cardList: string[]; //Change to Card[] when Card entity is made

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  selectCard(cardName: string) {
    this.notificationService.sendEvent<string>("selectCard", cardName)
  }

}
