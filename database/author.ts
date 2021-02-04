import mongoose from "mongoose";
const Schema= mongoose.Schema
const author=mongoose.model('author',new mongoose.Schema({
    join_id:String,
    _creator : { type: Number, ref: 'comment' },
        title: String,
        article:String





}))
export default author
