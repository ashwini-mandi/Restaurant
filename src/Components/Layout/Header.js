import mealsImage from "../../Assets/meals.jpg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Meals</h1>
        <button className="cart-btn">Cart</button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
