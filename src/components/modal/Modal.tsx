import { FC } from 'react';
import { useModal } from '../../hooks/useModal';
import { DeleteColumn, NewColumn, EditEntry, NewEntry } from '.';

interface IRenderTypeModal {
    deleteColumnBoard: () => FC;
    addNewColumnBoard: () => FC;
    editEntry: () => FC;
    newEntry: () => FC;
    none: () => FC;
}

export const Modal = () => {
    const { typeModal } = useModal()

    const renderTypeModal = {
        deleteColumnBoard: DeleteColumn,
        addNewColumnBoard: NewColumn,
        editEntry: EditEntry,
        newEntry: NewEntry,
        none: () => <></>
    }

    const ModalToRender = renderTypeModal[typeModal as keyof IRenderTypeModal]

    return <ModalToRender />
}