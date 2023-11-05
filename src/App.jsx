import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger, Text, Title, Center, Pagination } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useState, useEffect } from 'react';
import SettingsProvider from './Context/Settings';

import Form from './Components/Form'
import TodoList from './Components/List';

function App() {

  const [opened, { toggle }] = useDisclosure();

    const [list, setList] = useState([{id:'1234',
  assignee:'Josh', difficulty:3, text:'Testing', complete: false }]);
    const [incomplete, setIncomplete] = useState(0);


    useEffect(() => {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
        // linter will want 'incomplete' added to dependency array unnecessarily. 
        // disable code used to avoid linter warning 
        // eslint-disable-next-line react-hooks/exhaustive-deps 
      }, [list]);  

    function deleteItem(id) {
      const items = list.filter( item => item.id !== id );
      setList(items);
    }

    function toggleComplete(id) {
      const items = list.map( item => {
        if ( item.id === id ) {
          item.complete = ! item.complete;
        }
        return item;
      });
      setList(items);  
    }

    return (
      <>
      <MantineProvider>
        <SettingsProvider>
          <AppShell
            header={{ height: 60, color: "cyan" }}
            footer={{ height: 40, color: "cyan"}}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
          >
            <AppShell.Header ta="left" bg="blue">
              <Center maw={60} h={60}>
                <Text c="white">HOME</Text>
              </Center>
            </AppShell.Header>
            
            <AppShell.Navbar p="md">
              <Form />
            </AppShell.Navbar>

            <AppShell.Main m={10}>
                <Title c="white" 
                       bg="grey" 
                       order={3} 
                       data-testid="todo-h1"
                       p={5}
                       mb={15}
                >
                  To-Do List: { incomplete ? incomplete : 0 } items pending.
                </Title>
                <TodoList list={ list }
                          completeHandler={ toggleComplete }
                />
                <Pagination mt={25} value={1} onChange={null} total={10} />
            </AppShell.Main>

            <AppShell.Footer bg="blue">
            
            </AppShell.Footer>
          </AppShell>
        </SettingsProvider>
      </MantineProvider>
      </>
    );
}

/*

*/

export default App
