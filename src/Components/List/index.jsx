import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/index'

import Todo from '../Todo';

const TodoList = ( props ) => {
    const settings = useContext(SettingsContext);
    
    const { list, completeHandler, closeHandler } = props;
    //console.log('todo list:', list);
    
    return (
        <>
            {
                list ? list.map( item => (
                    <Todo key={ item.id } 
                      item={ item } 
                      completeHandler={ completeHandler }
                      closeHandler={ closeHandler }
                    />
                    //: null
                )) : null
            }
        </>
    )
};

export default TodoList;