import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const authStart= () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token,userId) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        token: token
    };
};

export const authFail = (err) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: err
    };
};

export const checkAuthTimeOut = (expiresIn) =>{
        return dispatch=>{setTimeout(() => {
            dispatch(logOut())
        }, expiresIn * 1000);
    }
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.LOG_OUT
    }
}

export const changeUrl = (url) =>{
    return{
        type: actionTypes.CHANGE_URL,
        url: url
    }
}


export const auth = (email,password,signIn) =>{
    return dispatch=>{
        dispatch(authStart());
        
        const authData={
             email: email,
             password: password,
             returnSecureToken: true
            }
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFrlohfNqW6zOpLSHHMbtm4WZ9__LFVA8';
            if(signIn){
                url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFrlohfNqW6zOpLSHHMbtm4WZ9__LFVA8'
            }
            Axios.post(url, authData)
            .then(response=>{
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000); 
                localStorage.setItem('token', response.data.idToken);
               
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeOut(response.data.expiresIn))
            })
            .catch(err=>{
                console.log(err);
                dispatch(authFail(err.response.data.error));
            });
    }
}

export const autoCheckState = () => {
    return dispatch => { 
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logOut());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logOut());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};