import React, { useState } from 'react';

const StateComponent = () =>  {
  const [message, setMessage] = useState('init message');
  const onClickEnter = () => setMessage('입장하셨습니다');
  const onClickLeave = () => setMessage('퇴장하셨습니다');

  return (
  <div>
    <button onClick={onClickEnter}> 입장 </button>
    <button onClick={onClickLeave}> 퇴장 </button>
    <h1>{message}</h1>
  </div>
  )
};

export default  StateComponent;
