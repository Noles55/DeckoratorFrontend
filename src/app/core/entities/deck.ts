import { Observable } from 'rxjs';
import { Card } from './card';

export class Deck {
  name: string;
  cards: Observable<Card>[];
}
