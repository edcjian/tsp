import routers from 'koa-router'
import commentList, {TheComment} from "../database/commentList";
import problem from "../database/problem";
import user from "../database/user";
import mongoose from "../database";
import axios from "axios";
import tests from "../database/tests";
// const ObjectId = mongoose.Schema.Types.ObjectId;

const router =new routers()
// router.prefix('/comment')
// router.get('/commentList',async (ctx,next)=>{
// // TheComment.save().then(res=>{console.log(res)})
//  let result =await  commentList.paginate({nameId:'e'},{page:2,limit:2},result => {
//     console.log(result)
//
// }
// )
//
//     console.log(result)
//     ctx.body=JSON.stringify(result)
// })


router.get('/come',async (ctx,next)=>{
    let pros =new problem(
        {
            _id:1,

            title:'hello',
            answerNum:2,
            answers:[
                {
                    avatar:'hello',
                    nameId:'hello',
                    Profession:'hello',
                    likeNum:2,
                    Favorites:2,
                    comments:[
                        {
                            avatar:'hello',
                            msg:'hello',
                            nameId:'hello',
                            date:'hello',
                            likeNum:2

                        }
                    ]
                }
            ]
        }
    )
    let uso =new user(
        {

            avatar:'llo',
            name:'llo',
            heAttention:2,
            attentionHe:2,
            Profession:'hello',
            AllLike:2,
            AllAgree:2,
            dynamic:'hello',
            theAnswer:pros._id
            ,
            ideas:{
                title:'hello',
                msg:'hello'
            },

            articles:[
                {
                    date:2,
                    title:'hello',
                    msg:'hello',
                    likeNum:2,

                }
            ]

        }
    )
    // pros.save().then(res=>{console.log(res)})
    // uso.save().then(res=>{
    //     console.log(res)
    // })

    let res =await user.findOne({name:'hello'}).populate('theAnswer','answers.comments')
    // @ts-ignore
    console.log(res.theAnswer)
    // @ts-ignore
    ctx.body=res.theAnswer
})
router.get('/jock',async (ctx,next) => {
    let res=  await axios.get('http://mock.51y.cc:81/mock/6007a37332adfa0499d3b861/graph#!method=get')

    console.log(res)
    ctx.body=res.data
})
router.get('/hello',async (ctx,next) => {
    ctx.body='hello i am nodejs'
})
router.get('/hel',async (ctx,next) =>{
    let tr =new tests({
        avatar: "as",
        name: "as",
        heAttention: 2,
        attentionHe: 2
    })
    let a=await tests.findOne({name:'as'})
    ctx.body=a
   // tr.save().then(res=>{
   //     console.log(res)
   // })
})
export default router
