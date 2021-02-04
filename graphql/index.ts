

import axios  from 'axios'
import{ApolloServer, gql} from 'apollo-server-koa'
import tests from "../database/tests";





const urls='http://mock.51y.cc:81/mock/6007a37332adfa0499d3b861/graph#!method=get'
const resolvers = {
    Query: {


pro:async(parent,args,context)=>{
    // console.log(args.name)
    // let a= await tests.findOne({name:args.name})



   let res= await axios.get(urls)

    console.log(res.data)
    return res.data
}
// user:()=>{
//     return input
// },
//         pro:async () => {
//              let res= await axios.get(urls)
//                 console.log(res.data)
// let ps =res.data
//             return ps
//         },
//         hello:()=>{
//            return 'why not'
// }

    },
};

 // const typeDefs = gql`
 //         type problem {
 //             avatar: String
 //             name: String
 //             heAttention: Int
 //             attentionHe: Int
 //         }
 //             type Query{
 //                   pro(name:String!):problem
 //             }
 //         `
 //  const typeDefs = gql`
 //      type problem {
 //          avatar: String
 //          name: String
 //          heAttention: Int
 //          attentionHe: Int
 //          Profession: String
 //          AllLike: Int
 //          AllAgree: Int
 //          dynamic: String
 //          theAnswer: Int
 //          ideas: [problemIdeas]
 //          articles: [problemArticles]
 //      }
 //
 //
 //      type problemIdeas {
 //          title: String
 //          msg: String
 //      }
 //
 //      type problemArticles {
 //          date: Int
 //          title: String
 //          msg: String
 //          likeNum: Int
 //      }
 //      type Query{
 //          pro:problem
 //      }
 //     `
const typeDefs=gql`
    type problem {
        _id: ID!
        title: String
        answerNum: Int
        answers: [problemAnswers]
    }


    type problemAnswers {
        avatar: String
        nameId: String
        Profession: String
        likeNum: Int
        Favorites: Int
        comments: [problemAnswersComments]
    }

    type problemAnswersComments {
        avatar: String
        msg: String
        nameId: String
        date: String
        likeNum: Int
    }
type Query{
    pro:problem
}
`


const server = new ApolloServer({ typeDefs, resolvers });

export  default server
