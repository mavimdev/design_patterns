"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealBuilder_1 = require("./MealBuilder");
function builderPattern() {
    const builder = new MealBuilder_1.MealBuilder();
    builder.prepChickenMeal().showItems();
    builder.prepVegMeal().showItems();
}
builderPattern();
