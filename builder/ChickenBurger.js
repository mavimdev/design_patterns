"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChickenBurger = void 0;
const Burger_1 = require("./Burger");
class ChickenBurger extends Burger_1.Burger {
    name() {
        return "Chicken Burger";
    }
}
exports.ChickenBurger = ChickenBurger;
