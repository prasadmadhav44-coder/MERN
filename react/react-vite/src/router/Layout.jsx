import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import UserStore from "../store/UserStore";
import CartStore from "../store/CartStore";

const Layout = () => {
  const [cartItems, setCartItems] = useState([]); // [{},{},{},{}]

  // Add a product to cart
  const addProduct = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If product exists, increment quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If product doesn't exist, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update product quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove a product from cart
  const removeProduct = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Delete all products from cart
  const deleteAllProducts = () => {
    setCartItems([]);
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.discountedPrice || item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const cartState = {
    items: cartItems,
    addProduct,
    updateQuantity,
    removeProduct,
    deleteAllProducts,
    getCartTotal
  };

  return (
    <>
      <CartStore.Provider value={cartState}>
        <UserStore.Provider value={{ name: "Sam" }}>
          <Header />
          <Outlet />
          <Footer />
        </UserStore.Provider>
      </CartStore.Provider>
    </>
  );
};

export default Layout;
