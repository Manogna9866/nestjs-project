import { Schema ,Document } from "mongoose";

export const userSchema = new Schema({
    fullname:String,
    lastname:String,
    mobileno:String,

},
{timestamps:true})
export interface user extends Document{
    fullname:String,
    lastname:String,
    mobileno:String,
}