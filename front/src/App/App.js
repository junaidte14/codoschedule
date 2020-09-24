import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../store/_actions';
import { PrivateRoute } from '../_components/PrivateRoute';
import Header from '../pages/common/Header';
import Footer from '../pages/common/Footer';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ViewTask from '../_components/tasks/ViewTask';
import AddTasks from '../_components/tasks/AddTask';
import UpdateTask from '../_components/tasks/UpdateTask';
import UpdateForm from '../_components/todolists/UpdateForm';
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
            <Route path="/tasks/:id" component={ViewTask}/>
            <PrivateRoute path="/add-task" component={AddTasks} />
            <PrivateRoute path="/update-task/:id" component={UpdateTask}/>
            <PrivateRoute path="/update-todo/:id" component={UpdateForm}/>
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
