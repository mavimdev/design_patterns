import { MealBuilder } from "./MealBuilder";


function builderPattern() {
    const builder = new MealBuilder();

    builder.prepChickenMeal().showItems();
    builder.prepVegMeal().showItems();
}

builderPattern();



