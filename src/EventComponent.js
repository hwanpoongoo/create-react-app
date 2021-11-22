import React, { useState } from 'react';

const EventComponent = () => {
  // const [username, setUserName] = useState('init username');
  // const [message, setMessage] = useState('init message');

  const [form, setForm] = useState({ username: '', message: '' });

  // const onChangeUsername = (e) => setUserName(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = (e) => {
    alert(username + ':' + message);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
        placeholder="사용자명"
      />

      <input
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="아무거나 입력해보세요"
      />

      <button onClick={onClick}> 클릭 </button>
    </div>
  );
};

export default EventComponent;
