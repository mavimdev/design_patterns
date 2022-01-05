import { Meal } from "./Meal";
import { VegBurger } from "./VegBurger";
import { Pepsi } from "./Pepsi";
import { ChickenBurger } from "./ChickenBurger";
import { Coke } from "./Coke";

export class MealBuilder {

    public prepVegMeal(): Meal {
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Pepsi());
        return meal;
    }

    public prepChickenMeal(): Meal {
        const meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Coke());
        return meal;
    }

}


