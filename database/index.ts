import mongoose from 'mongoose';
mongoose.connect('mongodb://111.229.235.215:9875/todoList',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
})
export default mongoose
