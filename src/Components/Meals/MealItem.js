import "./MealItem.css";
const MealItem = (props) => {
  return (
    <li>
      <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.desc}</div>
        <div className="price">{props.price}</div>
      </div>
    </li>
  );
};

export default MealItem;
