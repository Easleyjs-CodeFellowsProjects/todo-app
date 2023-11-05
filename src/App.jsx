import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider, Burger } from '@mantine/core';


import SettingsProvider from './Context/Settings';
import Layout from './Components/Layout';
import TodoApp from './Components/TodoApp';
import SettingsForm from './Components/SettingsForm';

function App() {

    return (
      <>
      <MantineProvider>
        <SettingsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<TodoApp />} />
                <Route path="settings" element={<SettingsForm />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SettingsProvider>
      </MantineProvider>
      </>
    );
}

export default App
