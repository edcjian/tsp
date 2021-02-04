import mongoose from "./index";
import mongoosePaginate from 'mongoose-paginate'
const article =mongoose.model('user',new mongoose.Schema({
    avatar:String,
    nameId:String,
    Profession:String,
    likeNum:Number,
    Favorites:Number,
    comments:[
        {
            avatar:String,
            nameId:String,
            date:String,
            likeNum:Number

        }
    ]



}).plugin(mongoosePaginate))
