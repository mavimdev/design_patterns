"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Burger = void 0;
const Wraper_1 = require("./Wraper");
class Burger {
    packing() {
        return new Wraper_1.Wraper();
    }
}
exports.Burger = Burger;
