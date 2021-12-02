import React, {useState} from 'react';

const Item = ({content, id, deleteTodo}) => {
    const [isDone, setIsDome] = useState(false);

    return(
        <li>
            <input type="checkbox" onChange={() => {
                setIsDome(!isDone);
            }} />
            <span style={
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>{content}</span>
            <button onClick={() => deleteTodo(id)}>削除</button>
        </li>
    );
};

export default Item;