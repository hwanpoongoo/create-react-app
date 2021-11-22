import React from 'react';
import PropTypes from 'prop-types';

//비구조화 할당 문법을 사용
const MyComponent2 = ({ name, children, name2 , favoriteNumber}) => {
  return (
    <>
      <p>===============아래부터 비구조화 할당 문법 사용==================</p>
      <div>디폴트 프롭 값 : {name}</div>
      <p>부모 컴포넌트에서 불러올때 넣은 프롭 값 : {name2}</p>
      <p>children prop 값 : {children}</p>
      <p>제일 좋아하는 숫자 : {favoriteNumber}</p>
    </>
  );
};

MyComponent2.defaultProps = {
  name: 'KJS2',
};

MyComponent2.propTypes = {
  name : PropTypes.string,
  favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent2;
