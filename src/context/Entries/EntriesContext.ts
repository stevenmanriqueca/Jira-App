import { createContext } from 'react';
import { EntriesState, Entry, EntryData, newEntryData } from '../../interfaces/context/entries';

interface ContextProps {
    state: EntriesState;
    newEntry: (entry: newEntryData) => void;
    updateEntry: (entry: EntryData) => void;
    updateEntryPosition: (entry: Entry) => void;
    deleteEntry: (idEntry: string) => void;
}

export const EntriesContext = createContext<ContextProps>({} as ContextProps)