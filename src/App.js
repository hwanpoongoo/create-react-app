import React from 'react';
import logo from './logo.svg';
import './App.css';
import './MyComponent';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import StateComponent from './StateComponent';
import EventComponent from './EventComponent';
import StyledComponent from './StyledComponent';

const say = 'wow';

function App() {
  //default prettier 사용시, 작은따옴표는 큰 따옴표로 변경됨
  //.prettierrc 에서 설정으로 다시 싱글 코테이션으로 변경
  const name = 'hwanpoongoo';

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        hello {name} {say}{' '}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      {/*주석 표시 체크 */}
      <MyComponent name2="KJS">children KJS</MyComponent>
      <MyComponent2 name2="KJS" favoriteNumber={3}>
        children KJS
      </MyComponent2>

      <StateComponent />
      <EventComponent />
      <StyledComponent />
    </>
  );
}

export default App;
