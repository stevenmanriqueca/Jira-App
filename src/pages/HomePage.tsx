import { FC } from 'react';
import { OptionsHome } from '../components/options';
import { HomeContainer } from '../containers';

const HomePage: FC = () => {
    return (
        <HomeContainer>
            <OptionsHome />
            <div>HomePage</div>
        </HomeContainer>
    )
}

export default HomePage