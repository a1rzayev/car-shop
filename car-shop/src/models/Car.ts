import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  brand: { type: String },
  year: { type: Number },
});

export const Car = mongoose.models.Car || mongoose.model('Car', CarSchema);
