export class Card {
  name: string;
  image_uris: any;
  cmc: number;
  type_line: string;
  primary_type: string;
  super_types: string[];
  sub_types: string[];
  color_identity: string[];
  tcg_price: number;
  gatherer_uri: string;
  scryfall_url: string;

  constructor(obj: any) {
    this.name = obj.name;
    this.image_uris = obj.image_uris;
    this.cmc = obj.cmc;
    this.type_line = obj.type;
    this.primary_type = obj.primary_type;
    let typeLineSplit = this.type_line.split(' — ');
    this.super_types = typeLineSplit[0].split(' ');
    this.sub_types = typeLineSplit[1]?.split(' ');
    this.tcg_price = obj.tcg_price;
    this.gatherer_uri = obj.gatherer_uri;
    this.scryfall_url = obj.scryfall_url;
  }
}
