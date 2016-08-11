const React = require('react');
const ReactDOM = require('react-dom');

//let h1 = React.createElement('h1',{},'React JS');
import App from './app'

ReactDOM.render(
  <div>
    <h1>React Js</h1>
    <App/>
  </div>,
  document.getElementById('root')
);
