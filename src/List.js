import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo }) => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Item
                            deleteTodo={deleteTodo}
                            content={todo.content}
                            id={todo.id}
                            key={todo.id}
                            />
                    )
                })
            }
        </ul>
    );
};

export default List;