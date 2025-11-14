import mongoose from 'mongoose';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const waitlistSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegex,
      trim: true,
      lowercase: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Prevent model recompilation in serverless environments
export default mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema);
