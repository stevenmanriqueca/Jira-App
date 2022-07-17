import { FC } from 'react';
import { AuthContainer } from "../containers"
import { AuthTabs } from '../components/auth';

const AuthPage: FC = () => {
    return (
        <AuthContainer>
            <AuthTabs />
        </AuthContainer>
    )
}

export default AuthPage