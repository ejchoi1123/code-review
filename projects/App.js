import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

const data = [
  {name: 'React 개발에 필요한 환경을 구축한다.', complated: true},
  {name: '새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8', complated: false},
  {name: '개발 편의를 위한 VSCode IDE를 익힌다.', complated: false},
  {name: '기본적인 Git 사용법을 익힌다.', complated: false},
  {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.', complated: false},
  {name: 'React로 간단한 노트 앱을 만들어본다.', complated: false},
];
class App extends Component {
  render() {
    return (
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
      */

      <div className="App">
        <Todos title={'강의목표'} items={data} />
      </div>
    );
  }
}

export default App;
