"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
const Bottle_1 = require("./Bottle");
class Drink {
    packing() {
        return new Bottle_1.Bottle();
    }
}
exports.Drink = Drink;
