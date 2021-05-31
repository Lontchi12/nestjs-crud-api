import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
//first letter of datatype is described with uppercase in mongoose
    title: {type: String, required: true},
    description: {type: String, required: true },
    price: {type: Number, required: true}
})



export interface Product extends mongoose.Document{
//datatype is described with lowercase in typescript 
    // id: string;
    // title: string;
    // description: string;
    // price: number;

    // constructor(id: string, title: string, description: string, price: number) {
    //     this.id = id;
    //     this.title = title;
    //     this.description = description;
    //     this.price = price;
    // } 
    //OR

  
        id: string;
        title: string;
        description: string;
        price: number;
    

}