import mongoose from "mongoose";

const FilterModel = new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: 'Products'},

    rooms: {type: mongoose.Schema.Types.Mixed, default: false},
    floor: {type: mongoose.Schema.Types.Mixed, default: false},
    rating: {type: mongoose.Schema.Types.Mixed, defaukt: false},
    bedrooms: {type: mongoose.Schema.Types.Mixed, default: false},

    price: {type: String, required: true},
    // region: {type: mongoose.Schema.Types.Mixed, default: false},
    coordinates: {type: String, required: true},

    fencedArea: {type: Boolean, default: false},
    сoveredParking: {type: Boolean, default: false},
    parkingSpace: {type: Boolean, default: false},
    video: {type: Boolean, default: false},

    balcony: {type: Boolean, default: false},
    loggia: {type: Boolean, default: false},

    animals: {type: Boolean, default: false},
    
    russian: {type: Boolean, default: false},
    german: {type: Boolean, default: false},
    french: {type: Boolean, default: false},
    japanese: {type: Boolean, default: false},
    english: {type: Boolean, default: false},
    
    swimmingPool: {type: Boolean, default: false},
    freeSiteParking: {type: Boolean, default: false},
    сrib: {type: Boolean, default: false},
    barbecueArea: {type: Boolean, default: false},
    fireplace: {type: Boolean, default: false},
    jacuzzi: {type: Boolean, default: false},
    electricСar: {type: Boolean, default: false},
    gym: {type: Boolean, default: false},
    breakfast: {type: Boolean, default: false},
    smoke: {type: Boolean, default: false},

    wifi: {type: Boolean, default: false},
    washer: {type: Boolean, default: false},
    сonditioner: {type: Boolean, default: false},
    heating: {type: Boolean, default: false},
    tv: {type: Boolean, default: false},
    kitchen: {type: Boolean, default: false},
    dryingMachine: {type: Boolean, default: false},
    workingArea: {type: Boolean, default: false},
})

export default mongoose.model('Filters', FilterModel)