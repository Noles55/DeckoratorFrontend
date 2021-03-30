import { Card } from "./card";

export class TrainingDeckDto {
    rating: number;
    card_data_list: CardData[] = [];

    constructor(commanders: Card[], cards: Card[], rating: number) {
      commanders.forEach(commander => {
        let commanderData: CardData = new CardData(commander);
        commanderData.is_commander = true;
        this.card_data_list.push(commanderData);
      });

      cards.forEach(card => {
        this.card_data_list.push(new CardData(card));
      });

      this.rating = rating;
    }
}

class CardData {
  scryfall_identifier: string;
  count: number;
  is_commander: boolean = false;

  constructor(card: Card) {
    this.scryfall_identifier = card.scryfall_identifier;;
    this.count = card.count;
  }
}
