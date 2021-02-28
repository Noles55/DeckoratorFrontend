export class Card {
  name: string;
  image_uris: any;
  mana_cost: string;
  cmc: number;
  type_line: string;
  super_type: string;
  sub_types: string[];
  oracle_text: string;
  power: string;
  toughness: string
  colors: string[];
  color_identity: string[];
  legalities: any;
  set: string;
  set_name: string;
  rarity: string;
  artist: string;

  constructor(obj: any) {
    this.name = obj.name;
    this.image_uris = obj.image_uris;
    this.mana_cost = obj.mana_cost;
    this.cmc = obj.cmc;
    this.type_line = obj.type_line;
    let typeLineSplit = this.type_line.split(' — ');
    this.super_type = typeLineSplit[0];
    this.sub_types = typeLineSplit[1]?.split(' ');
    this.oracle_text = obj.oracle_text;
    this.power = obj.power;
    this.toughness = obj.toughness;
    this.colors = obj.colors;
    this.color_identity = obj.color_identity;
    this.legalities = obj.legalities;
    this.set = obj.set;
    this.set_name = obj.set_name;
    this.rarity = obj.rarity;
    this.artist = obj.artist;
  }
}
