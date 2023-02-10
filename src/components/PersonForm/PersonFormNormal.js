export default function PersonFormNormal({ form, onChange, onSubmit }) {
  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(ev);
  }
  return (
    <div className="person-form-normal">
      <form onSubmit={handleSubmit}>
        <div>
          <label>姓名：<input type="text" name="username" value={form.username} onChange={onChange}></input></label>
        </div>
        <div>
          <label>爱好：<input type="text" name="hobby" value={form.hobby} onChange={onChange}></input></label>
        </div>
        <div>
          <button type="submit">提交</button>
        </div>
      </form>
    </div>
  )
}