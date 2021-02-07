import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-type-list',
  templateUrl: './card-type-list.component.html',
  styleUrls: ['./card-type-list.component.scss']
})
export class CardTypeListComponent implements OnInit {

  @Input() cardType: string;
  @Input() cardList: string[]; //Change to Card[] when Card entity is made

  constructor() { }

  ngOnInit() {
  }

}
