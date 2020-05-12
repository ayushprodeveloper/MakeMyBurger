import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/index'
import { Redirect } from 'react-router-dom';

class LogOut extends Component {
    
    componentDidMount(){
        this.props.toLogOut();
    }

    render(){
        return <Redirect to='/' />;
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        toLogOut: ()=> dispatch(actionTypes.logOut())
    }
}


export default connect(null,mapDispatchToProps)(LogOut);