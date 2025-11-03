import React, { useState } from "react";
import { KanbanBoard, KanbanCard, KanbanCards, KanbanHeader, KanbanProvider } from "./shadcn-io/kanban";
import { getColumns } from "@/data/columns";
import { getCards } from "@/data/cards";
import { People } from "@/data/people";

const columns = getColumns();

const players = People.getPlayers()
  .map(p => ({
    id: p.id,
    name: p.name,
    image: p.icon,
  }));

const getColumnId = () => {

}

const cards = getCards()
  .map(card => ({
    id: card.id,
    name: card.name,
    startAt: new Date(),
    endAt: new Date(),
    column: "0",
    owner: players[0],
  }));

export const BoardComponent = () => {
  const [deck, setDeck] = useState(cards);

  return (
    <KanbanProvider
      columns={columns}
      data={deck}
      onDataChange={setDeck}
    >
      {(column) => (
        <KanbanBoard id={column.id} key={column.id}>
          <KanbanHeader>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: column.color }}
              />
              <span>{column.name}</span>
            </div>
          </KanbanHeader>
          <KanbanCards id={column.id}>
            {(card: (typeof deck)[number]) => (
              <KanbanCard
                column={column.id}
                id={card.id}
                key={card.id}
                name={card.name}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="m-0 flex-1 font-medium text-sm">
                      {card.name}
                    </p>
                  </div>
                  {/* {card.owner && (
                    <Avatar className="h-4 w-4 shrink-0">
                      <AvatarImage src={card.owner.image} />
                      <AvatarFallback>
                        {card.owner.name?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  )} */}
                </div>
                <p className="m-0 text-muted-foreground text-xs">
                  {/* {shortDateFormatter.format(card.startAt)} -{' '}
                  {dateFormatter.format(card.endAt)} */}
                </p>
              </KanbanCard>
            )}
          </KanbanCards>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
};
