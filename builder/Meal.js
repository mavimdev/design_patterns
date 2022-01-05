"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
class Meal {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    showItems() {
        console.log("Meal:");
        this.items.forEach(item => {
            console.log(item.name() + " " + item.packing().name());
        });
    }
}
exports.Meal = Meal;
