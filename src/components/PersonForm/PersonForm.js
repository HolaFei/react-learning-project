import { Button, Form, Input } from 'antd';

const onFinish = values => {
  console.log('Success: ', values);
};

const PersonForm = ({form, onChange}) => {
  return (
    <Form
      name="person-form"
      labelCol={{span: 4}}
      wrapperCol={{span: 12}}
      onFinish={onFinish}
    >
      <Form.Item
        label="姓名"
        name="username"
      >
        <Input value={form.username} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label="爱好"
        name="hobby"
      >
        <Input value={form.hobby} onChange={onChange} />
      </Form.Item>
      <Form.Item
        wrapperCol={{offset: 4, span: 12}}
      >
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};

// const PersonForm = ({form, onChange}) => {
//   return (
//     <>
//       <form>
//         <input type="text" value={form.username} name="username" />
//         <input type="text" value={form.hobby} name="hobby" />
//       </form>
//     </>
//   )
// };

export default PersonForm;