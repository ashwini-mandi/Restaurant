import { useContext } from "react";
import mealsImage from "../../Assets/meals.jpg";
import "./Header.css";
import Cartcontext from "../../Store/Cart-context";
const Header = ({ showCartHandler }) => {
  const cartCnxt = useContext(Cartcontext);
  let quantity = 0;
  cartCnxt.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <>
      <header className="header">
        <h1>Meals</h1>
        <button className="cart-btn" onClick={showCartHandler}>
          {`cart ${quantity}`}
        </button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
