import { PersonEntity } from "@/types/personEntity";

export class People {
  static readonly Amy = { id: "1", name: "Amy", isPlayer: true, color: '#f2a18bff' } as PersonEntity;
  static readonly Mitchell = { id: "2", name: "Mitchell", isPlayer: true, color: '#764d26ff' } as PersonEntity;
  static readonly Eli = { id: "3", name: "Eli", isPlayer: false, color: '#87e685ff' } as PersonEntity;
  static readonly Asha = { id: "4", name: "Asha", isPlayer: false, color: '#f7e756ff' } as PersonEntity;
  // static readonly Joey = { id: "5", name: "Joey", isPlayer: false, color: '#7fbff8ff' } as PersonEntity;

  public static getAll = () => {
    return [People.Amy, People.Mitchell, People.Eli, People.Asha];
  }

  public static getPlayers = () => {
    return this.getAll().filter(p => p.isPlayer);
  }

  public static getKids = () => {
    return this.getAll().filter(p => !p.isPlayer);
  }
}