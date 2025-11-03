import { Status } from "./enums";
import { PersonEntity } from "./personEntity";
import { ResponsibilityEntity } from "./responsibilityEntity";

export type CardEntity = {
    name: string;
    responsibility: ResponsibilityEntity;
    conception: string;
    planning: string;
    execution: string;
    minimum: string;
    status: Status;
    subject?: PersonEntity;
    player?: PersonEntity;
}

export class Card {
    name: string;
}