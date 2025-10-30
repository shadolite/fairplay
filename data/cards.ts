import { Category, Split } from "@/types/enums";
import { ResponsibilityEntity } from "@/types/responsibilityEntity";

export const getCards = () => {
    let cards = [];
}

class Responsibilities {
    static readonly BathingAndGrooming = {
        id: "Bathing and Grooming",
        category: Category.caregiving,
        definition: "The nature of this cardholder\’s responsibilities changes depending on your kids\’ ages, but the point is that your kids need to brush their teeth, bathe, wash their faces, cut their nails, and brush their hair.",
        dailyGrind: true,
        happinessTrio: false,
        split: Split.kid
    } as ResponsibilityEntity;
    static readonly 'Car' = {
        id: "Car",
        definition: "",
        dailyGrind: false,
        happinessTrio: false,
        category: Category.out,
        split: Split.none
    } as ResponsibilityEntity;
    static readonly SelfCare = {
        id: "Self-Care",
        definition: "",
        dailyGrind: true,
        happinessTrio: true,
        category: Category.home,
        split: Split.adult
    } as ResponsibilityEntity;
}