import { createContext } from 'react';
import { ModalState } from '../../interfaces/context/modal';

interface ContextProps {
    state: ModalState,
    handleCloseModal: () => void;
    openModalNewColumn: () => void;
    openModalDeleteColumn: (nameColumn: string) => void;
    openModalEditEntry: (idEntry: string) => void;
    openModalNewEntry: () => void;
}

export const ModalContext = createContext<ContextProps>({} as ContextProps)