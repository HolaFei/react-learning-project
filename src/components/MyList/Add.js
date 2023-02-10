const Add = ({ text, onChange, onAdd }) => {
  return (
    <div className="add-item">
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Add;
