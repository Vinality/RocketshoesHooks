export function addToCart(product) {
  return {
      type: 'cart/ADD_TO_CART',
      payload: product
  }
} 

export function removeFromCart(product) {
  return {
    type: 'cart/REMOVE_FROM_CART', 
    payload: {
      id: product.id 
    }
  }
}

export function updateAmount(id, amount) {
  return {
    type: 'cart/UPDATE_AMOUNT',
    payload: {
      id,
      amount
    }
  }
}