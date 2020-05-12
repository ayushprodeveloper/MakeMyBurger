import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const InitialState={
    ingredients:null,
    totalPrice: 4,
    error: false,
    buying:false,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

const addIngredient = (state,action) =>{
    return{
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName],
        buying:true,
    };
}

const deleteIngredient = (state,action) =>{
    return{
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientsName]: state.ingredients[action.ingredientsName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientsName],
        buying:true,
    };
}

const setIngredient = (state, action) => {
    return{
        ...state,
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
        },
        totalPrice: 4.00,
        error: false,
        buying:false,
    };
}

const reducer = (state = InitialState, action) => {

    switch(action.type){
        
        case actionTypes.ADD_INGREDIENT: return addIngredient(state,action);
           
        case actionTypes.REMOVE_INGREDIENT:return deleteIngredient(state, action);
           
        case actionTypes.SET_INGREDIENTS:return setIngredient(state, action)
           
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return updateObject(state, {error: true,})
            
        default: 
            return state;

    }

    // return state;

}

export default reducer;