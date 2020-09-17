import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../store/_actions';
import Header from '../pages/common/Header';
import Footer from '../pages/common/Footer';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AddTasks from '../_components/AddTask';
import NotFound from '../_components/NotFound';
import './App.css';

const App = () => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  history.listen((location, action) => {
      dispatch(alertActions.clear());
  });

  return (
    <Router history={history}>
      <Header></Header>
      <div className="bg-white app-body">
        <div className="container">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/add-task" component={AddTasks}/>
            <Route path="/login" component={LoginPage}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
