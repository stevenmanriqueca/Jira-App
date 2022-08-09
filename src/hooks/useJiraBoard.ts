import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { v4 as uuid } from "uuid";
import { UserContext } from "../context/User/UserContext"
import { EntriesContext } from '../context/Entries/EntriesContext';
import { DropResult } from "react-beautiful-dnd";
import { IColumns } from "../interfaces/hooks";

export const useJiraBoard = () => {
    const { state } = useContext(UserContext)
    const { state: { entries, loading }, updateEntryPosition } = useContext(EntriesContext)
    const { user: { id: idUser, columnsJira } } = state
    const [columns, setColumns] = useState<IColumns>({})

    const organizeData = useMemo(() => {
        return columnsJira.reduce(
            (prev, columnName) => ({
                ...prev,
                [uuid()]: {
                    name: columnName,
                    items: entries
                        .sort((a, b) => Number(a.position) - Number(b.position))
                        .filter(({ status }) => status === columnName)
                }
            }),
            {}
        );
    }, [columnsJira, entries])

    const assignDataColumns = useCallback(() => {
        setColumns(organizeData)
    }, [organizeData])

    const onDragEnd = (result: DropResult) => {

        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
            const EntryMoved = {
                ...removed,
                status: destColumn.name,
            }
            updateEntryPosition(EntryMoved)
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
            const EntryMoved = {
                ...removed,
            }
            updateEntryPosition(EntryMoved)
        }
    }

    useEffect(() => {
        assignDataColumns()
    }, [assignDataColumns])

    return { idUser, columnsJira, columns, onDragEnd, loading }
}