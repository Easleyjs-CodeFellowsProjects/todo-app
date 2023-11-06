import { AppShell, Title, Text } from '@mantine/core';
import SignupForm from '../SignupForm';

import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings'

function SignupPage() {
    const settings = useContext(SettingsContext);
    const { displayCount, hideCompleted, settingsUpdated } = settings.settings;
    const updateSettings = settings.updateSettings;

    return (
        <>
            <Title  c="white" 
                    bg="grey" 
                    order={3} 
                    data-testid="todo-h1"
                    p={5}>Manage Settings
            </Title>

            <SignupForm handleSettings={ updateSettings } />

        <AppShell.Main>

            { 
                settingsUpdated ?
                    <>
                        <Title order={4}>Settings Updated:</Title>
                        <Text c="black">Items per page: { displayCount }</Text>
                        <Text c="black">Show Completed: { String( hideCompleted) }</Text>
                    </>
                : null
            }
        </AppShell.Main>
      </>
    )
}

export default SignupPage;