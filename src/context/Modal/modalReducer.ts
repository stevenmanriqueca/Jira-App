import { ModalState } from '../../interfaces/context/modal/index';

type modalActions =
    | { type: "closeModal" }
    | { type: "openModalColumn" }
    | { type: "openModalNewEntry" }
    | { type: "openModalEdit", payload: { idEntry: string } }
    | { type: "openModalDeleteColumn", payload: { nameColumn: string } }

export const modalReducer = (state: ModalState, action: modalActions): ModalState => {
    switch (action.type) {
        case "closeModal":
            return {
                ...state,
                typeModal: "none",
                open: false
            }

        case "openModalColumn":
            return {
                ...state,
                typeModal: "addNewColumnBoard",
                open: true
            }

        case "openModalNewEntry":
            return {
                ...state,
                open: true,
                typeModal: "newEntry"
            }

        case "openModalEdit":
            return {
                ...state,
                idEntry: action.payload.idEntry,
                open: true,
                typeModal: "editEntry"
            }

        case "openModalDeleteColumn":
            return {
                ...state,
                nameColumn: action.payload.nameColumn,
                typeModal: "deleteColumnBoard",
                open: true
            }

        default:
            return state;
    }
}