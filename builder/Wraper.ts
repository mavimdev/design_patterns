import { Packing } from "./Packing";

export class Wraper implements Packing {
    
    name(): string {
        return "using a wrapper";
    }
}