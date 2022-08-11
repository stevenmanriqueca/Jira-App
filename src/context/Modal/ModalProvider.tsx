import { FC, ReactNode, useReducer } from 'react';
import { ModalContext } from "./ModalContext"
import { ModalState } from "../../interfaces/context/modal"
import { modalReducer } from './modalReducer';

const initialState: ModalState = {
    open: true,
    typeModal: "none",
    nameColumn: "",
    idEntry: "",
}

interface Props {
    children: ReactNode
}

export const ModalProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(modalReducer, initialState)

    const handleCloseModal = () => dispatch({ type: "closeModal" })

    const openModalNewColumn = () => dispatch({ type: "openModalColumn" })

    const openModalNewEntry = () => dispatch({ type: "openModalNewEntry" })

    const openModalEditEntry = (idEntry: string) => dispatch({ type: "openModalEdit", payload: { idEntry } })

    const openModalDeleteColumn = (nameColumn: string) => dispatch({ type: "openModalDeleteColumn", payload: { nameColumn } })

    return (
        <ModalContext.Provider value={{
            state,
            handleCloseModal,
            openModalNewColumn,
            openModalDeleteColumn,
            openModalEditEntry,
            openModalNewEntry
        }}>
            {children}
        </ModalContext.Provider>
    )
}