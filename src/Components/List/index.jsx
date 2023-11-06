import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/index'

import Todo from '../Todo';

const TodoList = ( props ) => {
    
    const settings = useContext(SettingsContext);
    const { hideCompleted } = settings.settings;

    const { list, completeHandler } = props;

    return (
        <>
            {list ? list.map( item => (
                item.complete === false || hideCompleted !== false ?
                <Todo key={ item.id } 
                      item={ item } 
                      completeHandler={ completeHandler } 
                />
                : null
            )) : null}
        </>
    )
};

export default TodoList;