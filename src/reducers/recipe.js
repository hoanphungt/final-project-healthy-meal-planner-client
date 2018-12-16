
// const initialState = 
//         {
//             id: 1,
//             name: 'recipe 1',
//             cookingTime: '1h',
//             instruction: 'abc',
//             image: '../img/1.jpeg'
//         }

// export default (state = initialState, action = {}) => {
//         switch (action.type) {
//             default:
//                 return state
//         }
//     }

import {RECIPE_LOADED} from '../actions/recipes'

export default (state = null, action = {}) => {
    switch (action.type){
        case RECIPE_LOADED:
        return action.recipe
        default:
        return state
    }
}