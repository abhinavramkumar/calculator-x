import React, {Component} from 'react';
import Header from './Header';
import Calculator from './Calculator';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Calculator></Calculator>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
