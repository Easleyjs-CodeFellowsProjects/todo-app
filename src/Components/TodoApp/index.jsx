import { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/index'

import { AppShell, Title, Pagination, ActionIcon } from '@mantine/core';

import Form from '../Form'
import TodoList from '../List';

function TodoApp() {
    const [list, setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [incomplete, setIncomplete] = useState(0);
    const [activePage, setActivePage] = useState(1);


    const settings = useContext(SettingsContext);
    const { displayCount } = settings;

    useEffect(() => {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
        // linter will want 'incomplete' added to dependency array unnecessarily. 
        // disable code used to avoid linter warning 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        let pagedItemArr = [];
        const { displayCount } = settings;

        if ( activePage > 1) {
          console.log('page greater than 1:', activePage)
          const startIdx = ( activePage -1 ) * displayCount;
          const endIdx = startIdx + displayCount;

          if ( endIdx < list.length -1 ) {
            pagedItemArr = list.slice( startIdx, endIdx );
          } else {
            pagedItemArr = list.slice( startIdx )
          }
          setDisplayList( pagedItemArr );
        }
        if ( activePage === 1 ) {
          let pagedItemArr = list.slice(0, displayCount);
          setDisplayList( pagedItemArr );
        }
      }, [list, activePage]);

    function addItem( item ) {
      const newList = [...list, item];
      setList(newList);
    }

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
        <AppShell.Navbar p="md">
          <Form handleAddTodo={ addItem } />
        </AppShell.Navbar>
  
        <AppShell.Main m={10}>
        
          <Title  c="white" 
                  bg="grey" 
                  order={3} 
                  data-testid="todo-h1"
                  p={5}
                  mb={15} >
                  To-Do List: { incomplete ? incomplete : 0 } items pending.
          </Title>
          <TodoList list={ displayList }
          completeHandler={ toggleComplete }
          />
          { list.length > displayCount 
                        ? <Pagination mt={ 25 } value={ activePage } onChange={ setActivePage } total={ Math.ceil(list.length /displayCount) } />
                        : null }      
        </AppShell.Main>
      </>
    )
}

export default TodoApp;