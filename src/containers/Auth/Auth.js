import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css'

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner'
import { Redirect } from 'react-router-dom';


class Auth extends Component {

    state={
        controls:{
            email:{
                elementtype: 'input',
                elementconfig:{
                    type: 'email',
                    placeholder: 'Enter Email ID'
                },
                value:'',
                validation:{
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false, 
            },
            password:{
                elementtype: 'input',
                elementconfig:{
                    type: 'password',
                    placeholder: 'Enter Password'
                },
                value:'',
                validation:{
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false, 
            }
        },
        signIn: false,
      
    }

    componentDidMount(){
        if(!this.props.buying && this.props.url !== '/'){
            this.props.onChangeUrl();
        }
    }

    onSubmitHandler=(event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.signIn);
    }
  
    checkValidity(value,rules){
        let isValid = true;

        if(!rules){
            return true;
        }

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid;  
    }

    inputChangedHandler=(event, inputIdentifier)=>{
        const updatedControlsForm={
            ...this.state.controls
        }
        const updatedControlsFormElement={
            ...updatedControlsForm[inputIdentifier]
        }
        updatedControlsFormElement.value=event.target.value;
        updatedControlsFormElement.valid=this.checkValidity(updatedControlsFormElement.value,updatedControlsFormElement.validation)
        updatedControlsFormElement.touched=true
        updatedControlsForm[inputIdentifier]=updatedControlsFormElement;

        this.setState({controls: updatedControlsForm});   
        

    }

    changeMethod=()=>{
        const signIn = this.state.signIn;
        this.setState({signIn: !signIn})
    }

    render(){

       let formElementsArray = [];
       for(let key in this.state.controls){
        formElementsArray.push({
                id : key,
                config: this.state.controls[key]   
            }
           );
       }

       let error = null;

       let form = (
        <div>
           <form onSubmit={this.onSubmitHandler} >
               {formElementsArray.map(formElement=>(
                   <Input 
                   key={formElement.id}
                   elementType={formElement.config.elementtype}  
                   elementConfig={formElement.config.elementconfig}
                   value={formElement.config.value}
                   invalid={!formElement.config.valid}
                   shouldvalidate={formElement.config.validation}
                   touched={formElement.config.touched}
                        changed = {(event)=>this.inputChangedHandler(event,formElement.id)}  
                    />
               ))}
               <Button btnType="Success">SUBMIT</Button>
           </form>
           <Button btnType="Success" clicked={this.changeMethod} >{this.state.signIn ? 'SignUp' : 'SignIn'}</Button>
           </div>
       );
            
        if(this.props.loading){
            form = <Spinner />
        }

        if(this.props.error){
            error = this.props.error.message
        }

        let isAuth = null;
        if(this.props.isAuth){
            isAuth = <Redirect to={this.props.url} /> 
        }

        

        return(
            <div className={classes.Auth}>
                {isAuth}
                {error}
                {form}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        isAuth: state.auth.token != null,
        loading: state.auth.loading,
        error: state.auth.error,
        url: state.auth.url,
        buying: state.burger.buying
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email,password,signIn) => dispatch(actions.auth(email,password,signIn)),
        onChangeUrl: () => dispatch(actions.changeUrl('/'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);