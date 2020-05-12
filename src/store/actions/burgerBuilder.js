import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientsName: name,
    }
}

export const removeIngredient = (name) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientsName: name,
    }
}

export const setIngredient = (ingredient) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredient,
    }
}

export const fetchIngredientfailed = (error) => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED,
        error: error
    };
};

export const initIngredients =() => {
    return dispatch => {
        axios.get('https://burger-app-58f6d.firebaseio.com/ingredients.json')
            .then(response=>{
                dispatch (setIngredient(response.data));
            }).catch(error=>{
                dispatch (fetchIngredientfailed(error));
            })
        };
    };

