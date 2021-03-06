import React, { Component } from 'react';
import Aux from '../Aux'
import Modal from '../../components/UI/Modal/Modal'



const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{

            state={
                error: null,
            }
        
    componentDidMount(){
        this.reqInterceptor = axios.interceptors.request.use(req=>{
            this.setState({error: false});
            return req;
        });
        this.resInterceptor = axios.interceptors.response.use(
            res=>res, error=>{
                this.setState({error: error})
            }
        );
    }

    componentWillUnmount(){
        axios.interceptors.request.eject(this.reqInterceptor)
        axios.interceptors.response.eject(this.resInterceptor)
    }

        errorConfirmHandler=()=>{
           this.setState({error: null});
        }
        

        render(){
            // console.log(this.state.error);
            return (
                <Aux>
                    <Modal show={this.state.error} 
                    modalClosed={this.errorConfirmHandler}>
                        {this.state.error? this.state.error.message:null}
                        </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}
export default withErrorHandler;