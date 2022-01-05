import { Bottle } from "./Bottle";
import { Item } from "./Item";
import { Packing } from "./Packing";

export abstract class Drink implements Item {
    abstract name(): string;

    packing(): Packing {
        return new Bottle();
    }
}