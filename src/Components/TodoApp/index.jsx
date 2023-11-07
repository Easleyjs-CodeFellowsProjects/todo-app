import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { SettingsContext } from '../../Context/Settings/index'
import axios from 'axios';

import { AppShell, Title, Pagination, ActionIcon } from '@mantine/core';

import Auth from '../Auth';
import Form from '../Form'
import TodoList from '../List';

const SERVER_URL = 'http://localhost:3001' //import.meta.env.VITE_DEV_SERVER_URL || 'http://localhost:3001';

function TodoApp() {
    const [list, setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [incomplete, setIncomplete] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const context = useContext(AuthContext);
    const settings = useContext(SettingsContext);
    const { displayCount, hideCompleted } = settings.settings;

    function getList() {
      const config = {
        method: 'get',
        url: SERVER_URL + '/todo',
        headers: {Authorization: `bearer ${context.token}`}
      }
      axios(config).then(response => {
        const list = response.data
                     .map(todo => {
                        const { id, text, difficulty, assignee, complete } = todo;
                        return {
                          id,
                          text,
                          difficulty: parseInt(difficulty),
                          assignee,
                          complete: complete === 'true' ? true : false
                        }
                     });
        setList( list );
      });
    } 

    // get the list of tasks on the server when page loads.
    useEffect(() => {
      getList();
    },[]);

    useEffect(() => {
      let incompleteCount = list.filter(item => item.complete !== "1").length;

      let currentList = hideCompleted ? list.filter(item => item.complete === false) : list;
      console.log('relevant vars:',hideCompleted, currentList);

      setIncomplete(incompleteCount);
      document.title = `To Do List: ${incomplete}`;
      // linter will want 'incomplete' added to dependency array unnecessarily. 
      // disable code used to avoid linter warning 
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, [list, activePage, hideCompleted]); //, hideCompleted doesn't seem to be working..

    function addItem( item ) {
      const config = {
        method: 'post',
        url: SERVER_URL + '/todo',
        headers: {Authorization: `bearer ${context.token}`},
      }
      axios.post(SERVER_URL + '/todo', item, config)
           .then(response => {
            const item = response.data;
            const newList = [...list, item];
            setList(newList);
      });
    }

    function deleteItem(id) {
      const config = {
        headers: {Authorization: `bearer ${context.token}`},
      }
      list.map( item => {
        if ( item.id === id ) {
          axios.delete(SERVER_URL + '/todo/' + id, config)
        }
      });
      const updatedList = list.filter( item => item.id !== id);

      setList(updatedList);
    }

    function toggleComplete(id) {
      const config = {
        headers: {Authorization: `bearer ${context.token}`},
      }
      const items = list.map( item => {
        if ( item.id === id ) {
          item.complete = ! item.complete;
          axios.put(SERVER_URL + '/todo/' + id, item, config)
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

          <TodoList list={ displayList } completeHandler={ toggleComplete } closeHandler={ deleteItem } />
          { list.length > displayCount 
                        ? <Pagination mt={ 25 } value={ activePage } onChange={ setActivePage } total={ Math.ceil(list.length /displayCount) } />
                        : null }      
        </AppShell.Main>
      </>
    )
}

export default TodoApp;