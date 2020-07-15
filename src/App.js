import React, { Component } from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './router/main'

class App extends Component {
  render() {
    return (
      <div className="container-god-parants">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;