import Card from "../UI/Card";
import "./Available.css";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "Biryani",
    desc: "Rice",
    price: 300,
  },
  {
    id: 1,
    name: "Biryani",
    desc: "Rice",
    price: 300,
  },
  {
    id: 1,
    name: "Biryani",
    desc: "Rice",
    price: 300,
  },
  {
    id: 1,
    name: "Biryani",
    desc: "Rice",
    price: 300,
  },
];
const AvailableMeals = () => {
  return (
    <section className="meals">
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              price={meal.price}
              desc={meal.desc}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
