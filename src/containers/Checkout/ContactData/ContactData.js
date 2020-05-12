import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/index'

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'

import Input from '../../../components/UI/Input/Input'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

class ContactData extends Component {
    state={
        orderForm:{         
            name:{
                elementtype: 'input',
                elementconfig:{
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
            },
            street:{
                elementtype: 'input',
                elementconfig:{
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
            },
            zipCode:{
                elementtype: 'input',
                elementconfig:{
                    type: 'text',
                    placeholder: 'Zipcode',
                },
                value: '',
                validation:{
                    required: true,
                    minLength:5,
                    maxLength:5,
                },
                valid: false,
                touched: false,
            },
            country:{
                elementtype: 'input',
                elementconfig:{
                    type: 'text',
                    placeholder: 'Your Country',
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email:{
                elementtype: 'input',
                elementconfig:{
                    type: 'email',
                    placeholder: 'Your Email',
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementtype: 'select',
                elementconfig:{
                    options: [{value:'fastest', displayValue:'Fastest'},
                              {value:'cheapest', displayValue:'Cheapest'}
                ]
                },
                value: 'fastest',
                validation: {},
                valid: true,
            },
        },
        formIsValid: false,   
    }

    orderHandler=(event)=>{
        event.preventDefault();
        this.setState({loading: true})
        const formData={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
        }

        const order={
            ingredients:this.props.ings,
            price:this.props.price,
            orderData: formData,
            userId: this.props.userId

            }
        this.props.onOrderBurger(this.props.token, order);
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
        const updatedOrderForm={
            ...this.state.orderForm
        }
        const updatedOrderFormElement={
            ...updatedOrderForm[inputIdentifier]
        }
        updatedOrderFormElement.value=event.target.value;
        updatedOrderFormElement.valid=this.checkValidity(updatedOrderFormElement.value,updatedOrderFormElement.validation)
        updatedOrderFormElement.touched=true
        updatedOrderForm[inputIdentifier]=updatedOrderFormElement;

        let formIsValid=true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});   
    }
    
    render(){

        let formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        
        let form = ( 
                <form onSubmit={this.orderHandler}>
                {/* <Input  elementType="..." elementConfig="..." value="..." /> */}
               
                {formElementsArray.map(formElement=>(
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementtype}  
                        elementConfig={formElement.config.elementconfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldvalidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event)=>this.inputChangedHandler(event,formElement.id)}
                    />
                ))}
               
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
                </form>
            );
        if(this.props.loading){
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,    
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onOrderBurger: (token, orderData, )=> dispatch(actionTypes.purchaseBurger(token, orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData,axios));