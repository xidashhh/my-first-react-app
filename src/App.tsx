import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  datum: Date;
  dobas: number;
}

class App extends Component<{}, State>{

  constructor(props: {}) {
    super(props);

    this.state = {
      datum: new Date(),
      dobas: 0
    }

    
    setInterval(() => {
      //Mit csináljon 
      this.setState({
        datum:new Date()
      });
    }, 1000)
  }

  kockadobas = () => {
    const veletlen = Math.floor(Math.random()*6+1)
    this.setState({
      dobas:veletlen
    })
  }


  render(){
    return <div>
      <p id='ido' style={{
        fontStyle: 'italic',
        color: 'deeppink'

      }}>Az aktuális idő: { this.state.datum.toLocaleString() }</p>
      <p className="kockadobas">A dobás eredménye: { this.state.dobas.toLocaleString() }</p>
    <button onClick={this.kockadobas}>Dobás</button>
    </div>
  }
}

export default App;
