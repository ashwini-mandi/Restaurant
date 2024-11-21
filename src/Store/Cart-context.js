import { createContext } from "react";

const Cartcontext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default Cartcontext;
