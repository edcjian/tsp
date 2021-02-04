
import mongoosePaginate from 'mongoose-paginate'
import  mongoose from "./index";

// const Detailcomment =mongoose.Schema({
//         avatar: String,
//         nameId:String,
//         likedNum:String,
//         msg: String,
//     }
// )
// Detailcomment.plugin(mongoosePaginate)
const commentList=mongoose.model('commentList',new mongoose.Schema({
        avatar: String,
        nameId:String,
        likedNum:String,
        msg: String,
    }
).plugin(mongoosePaginate))
const TheComment =new commentList({
    avatar: 'h',
    nameId:'e',
    likedNum:'l',
    msg: 'o',
})
    export default commentList
export {commentList ,TheComment}
