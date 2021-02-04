import mongoose from "./index";
const ObjectId = mongoose.Schema.Types.ObjectId;
const comment =mongoose.model('test',new mongoose.Schema({
    avatar: String,
    name: String,
    heAttention: Number,
    attentionHe: Number
}))
export default comment
