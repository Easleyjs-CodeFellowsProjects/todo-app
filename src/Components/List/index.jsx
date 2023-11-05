

import Todo from '../Todo';

const TodoList = ( props ) => {
    
    const { list, completeHandler } = props;

    return (
        <>
            {list ? list.map( item => (
                !item.complete ?
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