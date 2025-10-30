import React, { useState } from "react";
import { CardStatusEnum } from "@/types/cardStatusEnum";
import { PersonEntity, People } from "@/types/personEntity";
import { KanbanBoard, KanbanCard, KanbanCards, KanbanHeader, KanbanProvider } from "./shadcn-io/kanban";
import { getColumns } from "@/data/columns";

const columns = getColumns();

const players = Array.from({ length: 4 })
    .fill(null)
    .map(() => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        image: faker.image.avatar(),
    }));

const exampleFeatures = Array.from({ length: 20 })
    .fill(null)
    .map(() => ({
        id: faker.string.uuid(),
        name: capitalize(faker.company.buzzPhrase()),
        startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
        endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
        column: faker.helpers.arrayElement(columns).id,
        owner: faker.helpers.arrayElement(players),
    }));

const Example = () => {
    const [features, setFeatures] = useState(exampleFeatures);

    return (
        <KanbanProvider
            columns={columns}
            data={features}
            onDataChange={setFeatures}
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
                        {(feature: (typeof features)[number]) => (
                            <KanbanCard
                                column={column.id}
                                id={feature.id}
                                key={feature.id}
                                name={feature.name}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex flex-col gap-1">
                                        <p className="m-0 flex-1 font-medium text-sm">
                                            {feature.name}
                                        </p>
                                    </div>
                                    {feature.owner && (
                                        <Avatar className="h-4 w-4 shrink-0">
                                            <AvatarImage src={feature.owner.image} />
                                            <AvatarFallback>
                                                {feature.owner.name?.slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                                <p className="m-0 text-muted-foreground text-xs">
                                    {shortDateFormatter.format(feature.startAt)} -{' '}
                                    {dateFormatter.format(feature.endAt)}
                                </p>
                            </KanbanCard>
                        )}
                    </KanbanCards>
                </KanbanBoard>
            )}
        </KanbanProvider>
    );
};
