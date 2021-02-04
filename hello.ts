//
// // // import cors from 'koa-cors'
// // import koa from 'koa'
// // import routers from "koa-router";
// // const app = new koa();
// // // app.('/hello',async (req,res) => {
// // //     res.send('hello')
// // // })
// //
// // const router =new routers()
// // // app.use(cors);
// // router.get('/rop',async (ctx,next)=>{
// //     ctx.body='hello'
// // })
// // app.listen(3000,()=>{
// //         console.log("app")
// // }
// //     )
// class np{
//     name:'kor'
//     age:1
//
//     constructor(name: 'kor', age: 1) {
//         this.name = name;
//         this.age = age;
//     }
//     disp():void {
//         console.log('method')
// }
// }
// interface ISum {
//     x: 1;
//     y: 1;
//     z:'kor'
// }
// // var custom :ISum={
// //     x: 0, y: 0
// //
// // }
// let val :'kor'|1
// val = 12
// console.log("数字为 "+ val)
// val = "Runoob"
// console.log("字符串为 " + val)
// function sum ({ x, y }: ISum):any {
//     return z + 'hello ${x+y}'
// }
// const x:1=7
// const y:1=8
// // console.log(`hello ${x+y}`)
// const z:'kor' ='hello'
// // console.log(sum({x,y,z}))
// type Person = {
//     name: 'kor';
//     age: 1;
// };
// // const bob: Person = {
// //     name: "bob"
// // };
import converter from 'graphql-apollo-json-to-schema'
import GenerateSchema from 'generate-schema';
const jars=       {
    _id: 1,
    title:'kor',
    answerNum:1,
    answers:
        {
            avatar:'kor',
            nameId:'kor',
            Profession:'kor',
            likeNum:1,
            Favorites:1,
            comments:
                {
                    avatar:'kor',
                    msg:'kor',
                    nameId:'kor',
                    date:'kor',
                    likeNum:1

                }

        }

}
console.log(converter('problem', jars))
