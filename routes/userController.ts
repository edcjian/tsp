
import routers from 'koa-router'
import author from "../database/author";
import comment from "../database/comment";
const router =new routers()
router.prefix('/users')

router.get('/node', function (ctx, next) {
    ctx.body = JSON.stringify({
        name:'jian',
        msg:'hello'
    })
})

router.get('/bar', async function (ctx, next) {
    let a=await comment.findOne({answerNum: 403})

   ctx.body=a
})


export default router
