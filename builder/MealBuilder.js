"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealBuilder = void 0;
const Meal_1 = require("./Meal");
const VegBurger_1 = require("./VegBurger");
const Pepsi_1 = require("./Pepsi");
const ChickenBurger_1 = require("./ChickenBurger");
const Coke_1 = require("./Coke");
class MealBuilder {
    prepVegMeal() {
        const meal = new Meal_1.Meal();
        meal.addItem(new VegBurger_1.VegBurger());
        meal.addItem(new Pepsi_1.Pepsi());
        return meal;
    }
    prepChickenMeal() {
        const meal = new Meal_1.Meal();
        meal.addItem(new ChickenBurger_1.ChickenBurger());
        meal.addItem(new Coke_1.Coke());
        return meal;
    }
}
exports.MealBuilder = MealBuilder;
