import { FC, ReactNode, useReducer, useEffect } from 'react';
import { EntriesContext } from "./EntriesContext"
import { entriesReducer } from "./entriesReducer"
import { Entry, EntriesState, EntryData, newEntryData } from '../../interfaces/context/entries';
import jiraApi from '../../api/jiraApi';
import { useSnackbar } from "notistack";


const initialState: EntriesState = {
    entries: [],
    loading: true,
}

interface Props {
    children: ReactNode
}


export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, initialState)
    const { enqueueSnackbar } = useSnackbar()

    const newEntry = async (entry: newEntryData) => {
        try {
            const { data } = await jiraApi.post<Entry>("/entries", entry)
            dispatch({ type: "newEntry", payload: data })
        }
        catch (error) {
            enqueueSnackbar("Updating error", { variant: "error" })
        }
    }

    const updateEntry = async (entry: EntryData) => {
        try {
            const { data } = await jiraApi.put<Entry>(`/entries/${entry._id}`, entry)
            dispatch({ type: "updateEntry", payload: data })
        }
        catch (error) {
            enqueueSnackbar("Updating error", { variant: "error" })
        }
    }

    const updateEntryPosition = async (entry: Entry) => {
        try {
            await jiraApi.put<Entry>(`/entries/${entry._id}`, entry)
        } catch (error) {
            enqueueSnackbar("Updating error", { variant: "error" })
        }
    }

    const deleteEntry = async (idEntry: string) => {
        try {
            dispatch({ type: "startLoading" })
            await jiraApi.delete(`/entries/${idEntry}`)
            dispatch({ type: "deleteEntry", payload: { idEntry } })
        } catch (error) {
            enqueueSnackbar("Failed to delete entry", { variant: "error" })
        } finally {
            dispatch({ type: "finishLoading" })
        }
    }

    const getEntries = async () => {
        try {
            dispatch({ type: "startLoading" })
            const { data } = await jiraApi.get<Entry[]>("/entries")
            dispatch({ type: "addEntries", payload: data })
        } catch (error) {
            enqueueSnackbar("An error has occurred, please reload the page.", { variant: "error" })
        } finally {
            dispatch({ type: "finishLoading" })
        }
    }

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <EntriesContext.Provider value={{ state, newEntry, updateEntryPosition, deleteEntry, updateEntry }}>
            {children}
        </EntriesContext.Provider>
    )
}