import { useState } from 'react';
import { useImmerReducer } from "use-immer";
import { nanoid } from 'nanoid';

import Add from './Add';
import Lists from './Lists';

import listReducer from './listReducer';

const initialList = [
  {
    id: nanoid(),
    text: '这是一条示例条目'
  }
];

const MyList = () => {
  const [text, setText] = useState('');
  const [list, dispach] = useImmerReducer(listReducer, initialList);

  const handleChange = ev => {
    setText(ev.target.value);
  }

  const handleAdd = () => {
    setText('')
    dispach({
      type: 'add',
      id: nanoid(),
      text
    })
  }

  return (
    <div className='list-component'>
      <Add text={text} onChange={handleChange} onAdd={handleAdd} />
      <Lists list={list} />
    </div>
  );
};

export default MyList;