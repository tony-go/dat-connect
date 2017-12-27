import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header/Header'

class App extends React.Component {
  render() {
    return(
      <Header />
    )
  }
}
  
ReactDOM.render(
  <App />,
  document.getElementById('root')
);