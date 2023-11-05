import '@mantine/core/styles.css';
import { MantineProvider, Burger } from '@mantine/core';

import SettingsProvider from './Context/Settings';
import TodoApp from './Components/TodoApp';

function App() {

    return (
      <>
      <MantineProvider>
        <SettingsProvider>
          <TodoApp />
        </SettingsProvider>
      </MantineProvider>
      </>
    );
}

export default App
