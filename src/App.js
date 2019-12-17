import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import ComponentView from './view/ComponentView'
import DetailView from './view/DetailView'
import HomeView from './view/HomeView'
import PageShell from './PageShell'	

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={PageShell(HomeView)}></Route>
        <Route path="/detail" exact component={PageShell(DetailView)}></Route>
        <Route path="/component" exact component={PageShell(ComponentView)}></Route>
      </div>
    );
  }
}
export default App;
