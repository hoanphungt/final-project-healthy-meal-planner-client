export const ADD_TO_SHOPPING_LIST = "ADD_TO_SHOPPING_LIST"

export function addToShoppingList(recipe, household) {
  return {
    type: ADD_TO_SHOPPING_LIST,
    payload: {
      recipe, 
      household
    }
  }
}