import { FC } from 'react';
import { CircularProgress, Grid, Stack } from '@mui/material';
import { HomeContainer } from '../containers';
import { useJiraBoard } from '../hooks/useJiraBoard';
import { DragDropContext } from 'react-beautiful-dnd';
import { OptionsHome } from '../components/options';
import { Column } from '../components/board';
import { Modal } from '../components/modal';


const HomePage: FC = () => {

    const { columns, loading, onDragEnd } = useJiraBoard()

    if (loading) {
        return (
            <Stack alignItems="center" sx={{ mt: "35vh" }} >
                <CircularProgress color="primary" />
            </Stack>
        )
    }

    return (
        <HomeContainer>
            <Modal />
            <OptionsHome />
            <Grid container spacing={1} justifyContent="center" >
                <DragDropContext
                    onDragEnd={result => onDragEnd(result)}
                >
                    {Object.entries(columns).map(([columnId, column]) => {
                        const { name, items } = column
                        return (
                            <Column key={columnId} columnId={columnId} nameColumn={name} itemsColumn={items} />
                        );
                    })}
                </DragDropContext>
            </Grid>
        </HomeContainer >
    )
}

export default HomePage