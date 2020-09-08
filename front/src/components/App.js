import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import AddTasks from './AddTasks';
import SingleTask from './SingleTask';
import NotFound from './NotFound';
import Login from './Login';
import Logout from './Logout';
import '../css/App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Header></Header>
        <div className="bg-white app-body">
          <div className="container">
            <Switch>
              <Route path="/" component={Main} exact/>
              <Route path="/add" component={AddTasks}/>
              <Route path="/tasks/:name" component={SingleTask}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
