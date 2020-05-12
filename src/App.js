import React, { Component } from 'react';

import { Switch, Route, withRouter, Redirect   } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import LogOut from './containers/Auth/LogOut/LogOut'

import { connect } from 'react-redux';

import * as actions from './store/actions/index'


const asyncCheckOut = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});
const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth');
});


class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignUp();
  }

  render () {
    
    let render = (
      <Switch>
           <Route path='/auth' exact component={asyncAuth} />
           <Route path='/' exact component={BurgerBuilder} />
           <Redirect to='/' />
         </Switch>
    )

    if(this.props.isAuth){
      render=(
        <Switch>
           <Route path='/checkout' component={asyncCheckOut} />
           <Route path='/orders' component={asyncOrders} />
           <Route path='/auth' exact component={asyncAuth} />
           <Route path='/' exact component={BurgerBuilder} />
           <Route path='/logout' exact component={LogOut} />
           <Redirect to='/' />
         </Switch>
      )
    }
   
    return (
      <div>
        <Layout>
          {render}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    isAuth: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch =>{
  debugger;
  return{
    onTryAutoSignUp: () => dispatch(actions.autoCheckState())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
