import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import AuthProvider from './Context/Auth'
import SettingsProvider from './Context/Settings/index';
import Layout from './Components/Layout';
import TodoApp from './Components/TodoApp';
import SettingsPage from './Components/SettingsPage';

function App() {

    return (
      <>
      <MantineProvider>
        <SettingsProvider>
          <AuthProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<TodoApp />} />
                    <Route path="settings" element={<SettingsPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </AuthProvider>
          </SettingsProvider>
      </MantineProvider>
      </>
    );
}

export default App
