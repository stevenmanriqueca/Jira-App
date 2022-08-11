import { Entry, EntriesState } from "../../interfaces/context/entries";

type jiraActions =
    | { type: "newEntry", payload: Entry }
    | { type: "addEntries", payload: Entry[] }
    | { type: "deleteEntry", payload: { idEntry: string } }
    | { type: "updateEntry", payload: Entry }
    | { type: "startLoading" }
    | { type: "finishLoading" }

export const entriesReducer = (state: EntriesState, action: jiraActions): EntriesState => {
    switch (action.type) {

        case "newEntry": {
            return {
                ...state,
                entries: [...state.entries, { ...action.payload }]
            }
        }

        case "addEntries": {
            return {
                ...state,
                entries: [...action.payload],
            }
        }

        case "deleteEntry": {
            return {
                ...state,
                entries: state.entries.filter(({ _id }) => _id !== action.payload.idEntry)
            }
        }

        case "updateEntry": {
            return {
                ...state,
                entries: state.entries.map((entry) => (
                    entry._id === action.payload._id
                        ? { ...action.payload }
                        : entry
                ))
            }
        }

        case "startLoading": {
            return {
                ...state,
                loading: true
            }
        }

        case "finishLoading": {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}