import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './components/NameForm.js';
import Clock from './components/Clock.js';

const SayHello = (props) => {
  return(
      <div className="App-header">
        <div>
            <img src={props.url} className="App-logo" alt="logo" />
            <h2>Hello {props.name}!</h2>
        </div>
      </div>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { name: "" };
  }

  onSubmit(e) {
      e.preventDefault();
      let name = e.currentTarget[0].value;
      this.setState({ name: name});
  }

  render() {
    return (
      <div className="App">
          <SayHello name={this.state.name} url="http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/3dDoge.gif"/>
          <NameForm onSubmit={this.onSubmit}/>
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
          <Clock />
      </div>
    );
  }
}

export default App;
