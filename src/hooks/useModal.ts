import { useContext } from "react"
import { ModalContext } from "../context/Modal/ModalContext"

export const useModal = () => {

    const { state, openModalNewColumn, handleCloseModal,
        openModalDeleteColumn, openModalEditEntry, openModalNewEntry } = useContext(ModalContext)

    const { open, typeModal, nameColumn, idEntry } = state

    return {
        open, typeModal, nameColumn, idEntry, openModalNewColumn, handleCloseModal,
        openModalDeleteColumn, openModalNewEntry, openModalEditEntry
    }
}