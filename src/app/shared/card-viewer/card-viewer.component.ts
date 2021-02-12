import { Card } from './../../core/entities/card';
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
  }
}
