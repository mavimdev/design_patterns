import { Packing } from "./Packing";

/**
 * Represents a Item of the meal
 */
export interface Item {
    name(): string;
    packing(): Packing;
}