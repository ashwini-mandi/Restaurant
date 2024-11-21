import { useState } from "react";
import Cartcontext from "./Cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    // items.push(item);
    console.log(item, "ash");
    setItems([...items, item]);
    console.log("inside", cartcontext);
  };
  const cartcontext = {
    items: items,
    totalAmount: 0,
    addItem: addItem,
    // removeItem: removeItem,
  };

  console.log(cartcontext);
  const removeItem = (id) => {};

  return (
    <Cartcontext.Provider value={cartcontext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
