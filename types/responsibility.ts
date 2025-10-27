import { ResponsibilityCategory } from "./category"

export type ResponsibilityEntity = {
    id: string;
    category: ResponsibilityCategory;
    definition: string;
    dailyGrind: boolean;
    happinessTrio: boolean;
    split: boolean;
}

export class Responsibilities {
    static readonly BathingAndGrooming = {
        id: "Bathing and Grooming",
        category: ResponsibilityCategory.Caregiving,
        definition: "The nature of this cardholder\’s responsibilities changes depending on your kids\’ ages, but the point is that your kids need to brush their teeth, bathe, wash their faces, cut their nails, and brush their hair.",
        dailyGrind: true,
        happinessTrio: false,
        split: true
    } as ResponsibilityEntity;
    static readonly 'Car' = {
        id: "Car",
        definition: "",
        dailyGrind: false,
        happinessTrio: false,
        category: ResponsibilityCategory.Out,
        split: false
    } as ResponsibilityEntity;
    static readonly SelfCare= {
        id: "Self-Care",
        definition: "",
        dailyGrind: true,
        happinessTrio: true,
        category: ResponsibilityCategory.Home,
        split: true
    } as ResponsibilityEntity;
}