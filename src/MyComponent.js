import React from 'react';

const MyComponent = (props) => {
  return (
    <>
      <div>
        디폴트 프롭 값 : {props.name}
      </div>
      <p>부모 컴포넌트에서 불러올때 넣은 프롭 값 : {props.name2}</p>
      <p>children prop 값 : {props.children}</p>
      
    </>
  );
};

MyComponent.defaultProps = {
  name: 'KJS2',
};

export default MyComponent;
