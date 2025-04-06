import mongoose from 'mongoose';

const PartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String },
  compatibleWith: [String],
});

export const Part = mongoose.models.Part || mongoose.model('Part', PartSchema);
