import { useState } from 'react'
const Lists = ({ list, onDeleted, onEdit }) => {
  return (
    <ul>
      {
        list.map(item => (
          <li key={item.id}>
            <ListItem item={item} onEdit={onEdit} />
            <button onClick={
              () => onDeleted(item.id)
            }>删除</button>
          </li>
        ))
      }
    </ul>
  )
};

const ListItem = ({ item, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleToggleEdit = () => {
    setIsEdit(!isEdit)
  };
  const handleChange = ev => {
    onEdit(item.id, ev.target.value)
  }
  let ItemComp = null;
  if (isEdit) {
    ItemComp = (
      <>
        <input type="text" value={item.text} onChange={handleChange}></input>
        <button onClick={ handleToggleEdit }>保存</button>
      </>
    );
  } else {
    ItemComp = (
      <>
        { item.text }
        <button onClick={ handleToggleEdit }>编辑</button>
      </>
    );
  }
  return ItemComp;
}

export default Lists;
