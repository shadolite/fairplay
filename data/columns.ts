import { Status } from "@/types/enums";
import { People } from "./people";

export const getColumns = () => {
    let playerColumns = People.getPlayers().map((p) => { return { id: p.id, name: p.name, color: p.color } });
    let stateColumns = [
        { id: "0", name: Status.inPlay.toString(), color: '#c863e7ff' },
        { id: "3", name: Status.inLimbo.toString(), color: '#8c2626ff' },
        { id: "4", name: Status.notInPlay.toString(), color: '#575757ff' },
    ];

    return playerColumns.concat(stateColumns);
}