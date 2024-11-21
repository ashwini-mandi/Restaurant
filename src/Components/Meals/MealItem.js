import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <li>
      <div className="meal">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>{props.name}</h3>
            <div className="description">{props.desc}</div>
            <div className="price">{props.price}</div>
          </div>
          <MealItemForm id={props.id} item={props} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
