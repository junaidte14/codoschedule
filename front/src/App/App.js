import React, {Component} from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import components from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
  }

  render(){
    const { alert } = this.props;
    return (
        <Router history={history}>
          <components.Header></components.Header>
          <div className="bg-white app-body">
            <div className="container">
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Switch>
                <Route path="/" component={HomePage} exact/>
                {/* <Route path="/add" component={AddTasks}/>
                <Route path="/tasks/:name" component={SingleTask}/> */}
                <Route path="/login" component={LoginPage}/>
                {/* <Route component={NotFound}/> */}
              </Switch>
            </div>
          </div>
          <components.Footer></components.Footer>
        </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
