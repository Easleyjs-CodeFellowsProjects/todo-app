import { AppShell, Title, Text } from '@mantine/core';
import SettingsForm from '../SettingsForm';

import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings'

function SettingsPage() {
    const settings = useContext(SettingsContext);
    const { displayCount, hideCompleted, settingsUpdated } = settings.settings;
    const updateSettings = settings.updateSettings;

    return (
        <>
        <AppShell.Navbar p="md">
            <Title  c="white" 
                    bg="grey" 
                    order={3} 
                    data-testid="todo-h1"
                    p={5}>Manage Settings
            </Title>

            <SettingsForm handleSettings={ updateSettings } />

        </AppShell.Navbar>

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

export default SettingsPage;