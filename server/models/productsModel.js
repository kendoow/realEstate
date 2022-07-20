import mongoose  from "mongoose";

const ProductsModel = new mongoose.Schema({
  image: { type: mongoose.Schema.Types.Array, required: true },
  price: { type: String, required: true },
  priceDay: { type: String, required: true },
  metro: { type: String, required: true },
  address: { type: String, required: true },
  rooms: { type: String, required: true },
  description: { type: String, required: true },
  coordinates:{type:String, required:true},

  apartamentsName: { type: String, required: true },
  priceMonth: { type: String, required: true },
  rewiewsCount: { type: String, required: true },
  rating: { type: String, required: true },
});

export default mongoose.model('Products', ProductsModel);
