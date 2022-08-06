import { useContext } from "react";
import { UserContext } from "../context/User/UserContext";
import { EntriesContext } from '../context/Entries/EntriesContext';

export const useOptions = () => {

    const { addNewColumn, deleteColumn } = useContext(UserContext)
    const { deleteEntry } = useContext(EntriesContext)


    return { addNewColumn, deleteColumn, deleteEntry }
}