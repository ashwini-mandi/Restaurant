import { useContext, useState } from "react";
import Input from "../UI/Input";
import "./MealItemForm.css";
import Cartcontext from "../../Store/Cart-context";

const MealItemForm = (props) => {
  const cartCntxt = useContext(Cartcontext);
  const [quantity, setQuantity] = useState(1);
  const onChangeHandle = (event) => {
    setQuantity(event.target.value);
  };
  const AddItem = (e) => {
    e.preventDefault();
    // cartCntxt.items.push(props.item);
    console.log(props, "vinus");
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCntxt.addItem({ ...props.item, quantity: quantity });
    console.log("after adding", cartCntxt);
  };

  console.log("inside render", cartCntxt.items);

  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          value: { quantity },
          onchange: onChangeHandle,
        }}
      />
      <button onClick={AddItem}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
