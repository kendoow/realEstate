import mongoose from "mongoose";

const FilterModel = new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: 'Products'},
    price: {type: mongoose.Schema.Types.Mixed, default: false},
    rooms: {type: mongoose.Schema.Types.Mixed, default: false},
    region: {type: mongoose.Schema.Types.Mixed, default: false},
    floor: {type: mongoose.Schema.Types.Mixed, default: false},
    rating: {type: mongoose.Schema.Types.Mixed, defaukt: false},
    animals: {type: mongoose.Schema.Types.Boolean, default: false},
    // Обустройство дома 
})

export default mongoose.model('Filters', FilterModel)