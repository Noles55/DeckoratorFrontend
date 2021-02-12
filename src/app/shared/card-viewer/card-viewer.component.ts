import { Card } from './../../core/entities/card';
import { NotificationService } from './../../core/services/notification.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.css']
})
export class CardViewerComponent implements OnInit {

  @Input()
  card: Card;

  constructor() { }

  ngOnInit() {
    // this.notificationService.subscribeToEvent<string>("selectCard", this.selectCard);
    // console.log(this.cardUrl);
  }

  // selectCard = (cardName: string) => {
  //   var cleanCardName= cardName.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
  //   this.cardUrl = "../../assets/images/" + cleanCardName + ".jpg";
  //   console.log(this.cardUrl);
  // }
}
