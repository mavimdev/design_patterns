import { Item } from "./Item";

export class Meal {
    private items: Array<Item>;

constructor() {
    this.items = [];
}

    public addItem(item: Item) {
        this.items.push(item);
    }

    public showItems() {
        console.log("Meal:");
        this.items.forEach(item => {
            console.log(item.name() + " " + item.packing().name());
        });
    }
}