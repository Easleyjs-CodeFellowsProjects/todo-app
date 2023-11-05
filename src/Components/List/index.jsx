import { SettingsContext } from '../../Context/Settings/index'
import { useContext } from 'react';

import Todo from '../Todo';

const TodoList = ( props ) => {
    const settings = useContext(SettingsContext);
    const { list, completeHandler } = props;

    return (
        <>
            {list ? list.map( item => (
                <Todo key={ item.id } 
                      item={ item } 
                      completeHandler={ completeHandler } 
                />
            )) : null}
        </>
    )
};

export default TodoList;