export const ADD_TO_SHOPPING_LIST = "ADD_TO_SHOPPING_LIST"
export const CLEAR_SHOPPING_LIST = "CLEAR_SHOPPING_LIST"

export function addToShoppingList(recipe, household) {
  return {
    type: ADD_TO_SHOPPING_LIST,
    payload: {
      recipe, 
      household
    }
  }
}

export function clearShoppingList() {
  return {
    type: CLEAR_SHOPPING_LIST,
  }
}
