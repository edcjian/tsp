// import body from 'body'

import json from 'koa-json'
import logger from 'koa-logger'
import cors from 'koa-cors'
import koa from 'koa'
 import userController from "./routes/userController";
import path from 'path'
const app =new koa()
import routers from 'koa-router'
import comment from "./database/comment";
import author from "./database/author";
import commentController from "./routes/commentController";
import server from "./graphql/index";

const router =new routers()


app.use(cors({
  origin: function(ctx) {

    return '*';
  },
  // @ts-ignore
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(commentController.routes())
app.use(userController.routes())
app.use(userController.allowedMethods())
app.use(json())
app.use(logger())


const miss =new comment({
  _id:1,
  join_id:3,
  pid:1,
  topic: '读一本忘一本',
  answerNum: 403,
  article: '作者：FRANK\n' +
      '链接：https://www.zhihu.com/question/48633827/answer/1685642609\n' +
      '来源：知乎\n' +
      '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\n' +
      '\n' +
      '所谓这就是为什么有Kotlin。Kotlin是想干掉Java。众所周知Scala用户里有Better Java派和Pure-FP派。Kotlin在很多地方就是学习了Scala的语法，比如说data class和类构造器的设计，在Scala中都可以找到类似的东西。同时有加了不少语法糖，比如getter和setter，委托的语法糖，解决了Java没有这方面语法的缺点。虽然说抽象能力和类型系统比Scala差很多。但是吸引了Better Java派的目光。毕竟Kotlin的目的就是在JVM上建立一个有C#的易用性，Scala的语法精简，Java的生态的语言，要是你觉得Java语法太垃圾干嘛不用呢？总体再说，Kotlin的目的就打造Better Java，打造新一代的JVM语言（这个新一代和Scala不一样，Scala是强调类型系统的改良和伸缩性。Kotlin是语法糖）。如上文所提到，Scala的高级特性比如类型投影，存在类型，高阶类型这些拿来开发应用基本没什么用。所以有了Kotlin，Kotlin的类型系统就是Java类型系统的延续。但是哪来开发类库Kotlin的抽象能力就不够用了。看看Arrow.kt就知道Kotlin实现各种代数上的抽象结构有多难。而Pure-FP派的Scala用户因为是Scala类型系统的重度用户，没有高级的类型就写不出来了，所以就继续用Scala。Groovy的目的就是为了开发一个JVM上的脚本语言。灵活性比Scala还强。Groo',
  author: {
    icon: 'https://img.yzcdn.cn/vant/cat.jpeg',
    name: '罗翔',
    desc: '中南政法大学教授'
  },
  bottom: {
    likeNum: 430,
    Favorites: [Object],
    liked: false,
    commentNum: '805'
  }

})

const aut=new author({

  _creator: miss._id,
  title: 'hello',
  join_id:3,

})

// let a=await author.aggregate([{
//   $lookup: {
//     from:'comments',
//     localField:'join_id',
//     foreignField:'join_id',
//     as:'poper'
//
//   },
//
// },
//   { $unwind: "$poper" }
// ])
// console.log(a)



server.applyMiddleware({ app });



app.listen(3333,()=>console.log(`🚀 Server ready at http://localhost:3333${server.graphqlPath}`))
export default app
