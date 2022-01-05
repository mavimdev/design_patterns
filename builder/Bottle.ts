import { Packing } from "./Packing";

export class Bottle implements Packing {
    
    name(): string {
        return "using a bottle";
    }
}