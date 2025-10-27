import { CardStatusEnum } from "./cardStatus";
import { PersonEntity } from "./person";
import { ResponsibilityEntity } from "./responsibility";

export type CardEntity = {
    responsibility: ResponsibilityEntity;
    conception: string;
    planning: string;
    execution: string;
    minimum: string;
    status: CardStatusEnum;
    subject?: PersonEntity;
    player?: PersonEntity;
}