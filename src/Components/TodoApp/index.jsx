import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { SettingsContext } from '../../Context/Settings/index'
import axios from 'axios';

import { AppShell, Title, Pagination, ActionIcon } from '@mantine/core';

import Auth from '../Auth';
import Form from '../Form'
import TodoList from '../List';

const SERVER_URL = import.meta.env.VITE_DEV_SERVER_URL || 'http://localhost:3001';

function TodoApp() {
    const [list, setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [incomplete, setIncomplete] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const context = useContext(AuthContext);
    const settings = useContext(SettingsContext);
    const { displayCount } = settings;

    // we'll see how this one goes. not really using state list anymore
    // will depend on being in sync w/ server. i.e. list will be on there.
    // only displayList in state really
    useEffect(() => {
      const config = {
          method: 'get',
          url: SERVER_URL + '/article',
          headers: {Authorization: `bearer ${context.token}`}
        }
      
      axios(config).then(response => {
          const list = response.data;
  
          let incompleteCount = list.filter(item => !item.complete).length;
          setIncomplete(incompleteCount);
          document.title = `To Do List: ${incomplete}`;
  
          let pagedItemArr = [];
          const { displayCount } = settings;
          
          if ( activePage > 1) {
            //console.log('page greater than 1:', activePage)
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
          //setArticleList(response.data);
      });
  
  }, [list, activePage]);

    function addItem( item ) {
      // will need to refactor this to use axios
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
        <Auth capability={'create'}>
          <AppShell.Navbar p="md">
            <Form handleAddTodo={ addItem } />
          </AppShell.Navbar>
        </Auth>
  
        <AppShell.Main m={10}>
        
          <Title  c="white" 
                  bg="grey" 
                  order={3} 
                  data-testid="todo-h1"
                  p={5}
                  mb={15} >
                  To-Do List: { incomplete ? incomplete : 0 } items pending.
          </Title>

          <TodoList list={ displayList } completeHandler={ toggleComplete } />
          { list.length > displayCount 
                        ? <Pagination mt={ 25 } value={ activePage } onChange={ setActivePage } total={ Math.ceil(list.length /displayCount) } />
                        : null }      
        </AppShell.Main>
      </>
    )
}

export default TodoApp;