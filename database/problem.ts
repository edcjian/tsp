import mongoose from "./index";
const problem =mongoose.model('problem',new mongoose.Schema(

        {
    _id: Number,
    title:String,
    answerNum:Number,
    answers:[
            {
            avatar:String,
            nameId:String,
            Profession:String,
            likeNum:Number,
            Favorites:Number,
            comments:[
                {
                    avatar:String,
                    msg:String,
                    nameId:String,
                    date:String,
                    likeNum:Number

                }
            ]
        }
    ]
}

// }
))
export default problem
