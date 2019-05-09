import React, { Component } from "react";
import Form from './components/form';
import styles from './style/formstyle.css';
import AppRouter from './router';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
      <AppRouter>
          <Form/>
        </AppRouter>
      </div>
    
    )
  }
}

export default App;
