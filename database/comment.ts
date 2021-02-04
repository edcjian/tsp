
import mongoose from "./index";
const ObjectId = mongoose.Schema.Types.ObjectId;
const comment =mongoose.model('comment',new mongoose.Schema({
    _id:String,
    pid:String,
    join_id:String,
    topic:String,
    answerNum:String,
    adds:String,

    author:{
        icon:String,
        name:String,
        desc:String
    },
    bottom:{
        likeNum:String,
        Favorites:{
            fnum:String,
            isfavor:false,

        },
        liked:false,
        commentNum:String
    },
    article:String



}))
export default comment
