import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility'


const initialState={
    token: null,
    userId: null,
    error: null,
    loading: false,
    url:'/',
}

const authStart=(state,action)=>{
    return updateObject(state, {error:null,loading:true})

}

const changeUrl = (state, action) =>{
    return updateObject(state,{url: action.url});
}

const authSuccess=(state, action) =>{
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const authFailed= (state,action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
        })
}

const logOut = (state,action) => {
    return updateObject(state,{
        userId: null,
        token: null,
    })
}

const reducer = (state= initialState, action) =>{

    switch (action.type){
        case actionTypes.AUTH_START:
            return authStart(state, action);

       case actionTypes.AUTH_SUCCESS:
           return authSuccess(state, action);

        case actionTypes.AUTH_FAIL:
            return authFailed(state, action);

        case actionTypes.LOG_OUT:
            return logOut(state, action)

        case actionTypes.CHANGE_URL:
            return changeUrl(state, action);
        
        default: 
            return state
    }
}

export default reducer;