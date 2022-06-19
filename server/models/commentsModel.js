import mongoose from "mongoose";


const CommentModel = new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Products'},
    comments: [{
        image: {type: String, required: true},
        name: {type: String, required: true},
        date: {type: String, required: true},
        text: {type: String, required: true},
    }],
})

export default mongoose.model('Comments', CommentModel);