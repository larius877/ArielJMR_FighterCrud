
export class Fighter {
  public id: number;
  public name: string;
  public address: string;
  public fightsWon: number;
  public age: number;
  public nationality: string;
  public kilograms: number;

  constructor(properties: Fighter) {
    this.id = properties.id ? properties.id : 0;
    this.name = properties.name;
    this.address = properties.address;
    this.fightsWon = properties.fightsWon;
    this.age = properties.age;
    this.nationality = properties.nationality;
    this.kilograms = properties.kilograms;
  }
}
