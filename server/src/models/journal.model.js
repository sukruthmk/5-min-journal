const mongoose = require('mongoose');

// TODO: remove debug
mongoose.set('debug', true);

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    date: { type: Date, required: true },
    grateful_1: { type: String, max: 250 },
    grateful_2: { type: String, max: 250 },
    grateful_3: { type: String, max: 250 },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

// Export the model
module.exports = mongoose.model('Order', OrderSchema);
