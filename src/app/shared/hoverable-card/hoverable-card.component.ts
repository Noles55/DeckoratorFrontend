import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/entities/card';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'hoverable-card',
  templateUrl: './hoverable-card.component.html',
  styleUrls: ['./hoverable-card.component.scss']
})
export class HoverableCardComponent implements OnInit {

  @Input() card: Card;
  @Input() url: string;
  @Input() isCommander: boolean;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  onMouseEnter() {
    this.notificationService.sendEvent('selectCard', this.card);
  }

}
