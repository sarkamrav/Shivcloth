import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Link,Switch } from 'react-router-dom' 
import Header from './component/Header'
import Home from './component/Home'
import PDP from './component/PDP'
function App() {
  return (  
    <div className="App">
      <Header/>
      <Switch>
      <Route path = '/' component ={Home} exact/>
      <Route path = '/product/:id' component ={PDP} exact/>
      </Switch>
    </div>
  );
}

export default App;
