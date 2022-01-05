import { Item } from "./Item";
import { Packing } from "./Packing";
import { Wraper } from "./Wraper";

export abstract class Burger implements Item {
    abstract name(): string;

    packing(): Packing {
        return new Wraper();
    }

}