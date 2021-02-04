import mongoose from "./index";
const ObjectId = mongoose.Schema.Types.ObjectId;
const user =mongoose.model('user',new mongoose.Schema({

    avatar:String,
    name:String,
    heAttention:Number,
    attentionHe:Number,
    Profession:String,
    AllLike:Number,
    AllAgree:Number,
    dynamic:String,
    theAnswer:
        {
            type:Number,ref:'problem'

    }

,
    ideas:{
        title:String,
        msg:String
    },

    articles:[
        {
            date:Number,
            title:String,
            msg:String,
            likeNum:Number,

        }
    ]

}

))
export default user
