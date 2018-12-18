import { ADD_TO_SHOPPING_LIST, CLEAR_SHOPPING_LIST } from "../actions/shoppingList";

const addToShoppingList = (oldShoppingList, recipe, household) => {
  const recipeIngredients = recipe.recipeIngredients 

  const newShoppingList = recipeIngredients.reduce((shoppingList, recipeIngredient) => {
    const ingredientId = recipeIngredient.ingredient.id
    const ingredientName = recipeIngredient.ingredient.name
    const quantity = recipeIngredient.quantity
    const unit = recipeIngredient.unit.name

    if (shoppingList.hasOwnProperty(ingredientId)) {
      shoppingList[ingredientId].quantity += quantity * household
    }
    else {
      shoppingList[ingredientId] = {}
      shoppingList[ingredientId].id = ingredientId
      shoppingList[ingredientId].name = ingredientName
      shoppingList[ingredientId].quantity = quantity * household
      shoppingList[ingredientId].unit = unit
    }

    return shoppingList

  }, oldShoppingList)

  return newShoppingList

}

const initialState = {}

export default (state = initialState, action = {}) => {
    switch (action.type){
        case ADD_TO_SHOPPING_LIST:
        return addToShoppingList(state, action.payload.recipe, action.payload.household)

        case CLEAR_SHOPPING_LIST:
        return {}

        default:
        return state
    }
}