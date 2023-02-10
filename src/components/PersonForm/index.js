// import { useState } from 'react';
import { useImmer } from 'use-immer';
import { Col, Row } from 'antd';
// import PersonForm from './PersonForm';
import PersonFormNormal from './PersonFormNormal';
import InfoPlay from './InfoPlay';

const FormPlayer = () => {
  // const [form, setForm] = useState({
  //   username: '',
  //   hobby: ''
  // });

  // const [info, setInfo] = useState({
  //   ...form
  // })
  const [form, updateForm] = useImmer({
    username: '',
    hobby: ''
  });

  const [info, updateInfo] = useImmer({
    ...form
  })

  const handleChange = ev => {
    // setForm({
    //   ...form,
    //   [ev.target.name]: ev.target.value
    // });
    updateForm(draft => {
      draft[ev.target.name] = ev.target.value;
    })
  };

  const handleSubmit = ev => {
    // setInfo({
    //   ...form
    // })
    updateInfo(draft => {
      draft.username = form.username;
      draft.hobby = form.hobby
    })
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <PersonFormNormal
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Col>
        <Col span={12}>
          <InfoPlay info={info} />
        </Col>
      </Row>
    </>
  );
};

export default FormPlayer;