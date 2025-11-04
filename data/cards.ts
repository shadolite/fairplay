import { CardEntity } from "@/types/cardEntity";
import { Category, Split } from "@/types/enums";
import { ResponsibilityEntity } from "@/types/responsibilityEntity";
import { People } from "./people";
import { v4 as getUuid } from 'uuid';

export const getCards = (): CardEntity[] => {
  let cards = [] as CardEntity[];
  responsibilities.filter(r => r.split == Split.kid).forEach(r => {
    People.getKids().forEach(kid => {
      cards.push({
        id: getUuid(),
        name: `${r.id} (${kid.name})`,
        responsibility: r,
        subject: kid
      } as CardEntity)
    })
  });
  responsibilities.filter(r => r.split == Split.adult).forEach(r => {
    People.getPlayers().forEach(player => {
      cards.push({
        id: getUuid(),
        name: `${r.id} (${player.name})`,
        responsibility: r,
        subject: player
      } as CardEntity)
    })
  });
  responsibilities.filter(r => r.split == Split.none).forEach(r => {
    cards.push({
      id: getUuid(),
      name: r.id,
      responsibility: r
    } as CardEntity);
  });

  return cards;
}

const getName = (card: CardEntity): string => {
  return `${card.responsibility.id} (${card.subject?.name})`;
}

const responsibilities = [
  {
    id: "Bathing and Grooming",
    category: Category.caregiving,
    definition: "The nature of this cardholder\’s responsibilities changes depending on your kids\’ ages, but the point is that your kids need to brush their teeth, bathe, wash their faces, cut their nails, and brush their hair.",
    dailyGrind: true,
    happinessTrio: false,
    split: Split.kid
  } as ResponsibilityEntity,
  {
    id: "Auto",
    definition: "Do you know what happens if you don\’t put the new registration sticker on your car? You get a ticket that could have easily been avoided, that\’s what. This cardholder handles all items relating to your family’s car(s), including putting that sticker on in a timely manner, paying for that darn ticket, renewing insurance, handling maintenance, getting car washes, regularly filling up with gas, and getting the oil checked so that you feel safe and secure in the family car. ",
    dailyGrind: false,
    happinessTrio: false,
    category: Category.out,
    split: Split.none
  } as ResponsibilityEntity,
  {
    id: "Self-Care",
    definition: "Each of you gets a self-care card regardless of how many children and other responsibilities you have. For some, a daily multivitamin, a good book, and a hot bath fit the bill. Others may have weekly therapy or wellness appointments, and also set aside regular time to exercise. No guilt or shame allowed. Take this important time for you and allow your partner to do the same.",
    dailyGrind: true,
    happinessTrio: true,
    category: Category.caregiving,
    split: Split.adult
  } as ResponsibilityEntity
]