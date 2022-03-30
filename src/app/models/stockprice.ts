import { Stock } from "./stock";

export class Stockprice {
    constructor(
        public stock:Stock,
        public maxStock:Number,
        public minStock:Number,
        public avgStock:Number
    ){}
}
