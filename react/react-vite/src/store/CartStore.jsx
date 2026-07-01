import { createContext } from 'react'

// Define the initial cart state
const initialCartState = {
  items: [], // [{},{},{}]
  addProduct: () => {},
  updateQuantity: () => {},
  removeProduct: () => {},
  deleteAllProducts: () => {},
  getCartTotal: () => 0
};

const CartStore = createContext(initialCartState);

export default CartStore;