import mongoose from 'mongoose';

const arContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['literature', 'movie'],
    required: true
  },
  location: {
    name: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  content: {
    text: String,
    mediaUrl: String,
    overlayImage: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

export default mongoose.model('ARContent', arContentSchema);