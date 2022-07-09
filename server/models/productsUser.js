import mongoose from "mongoose"

const productsUserModel = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User', unique: true},
    favourites: {type: mongoose.Schema.Types.Array, required: true, default: []},
})

export default mongoose.model('UserProduct', productsUserModel)