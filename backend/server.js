import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

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

const Waitlist = mongoose.model("Waitlist", waitlistSchema);

app.post("/api/waitlist", async (req, res) => {
  const { email } = req.body || {};
  if (!email || !emailRegex.test(String(email).toLowerCase())) {
    return res.status(400).json({ message: "Invalid email" });
  }
  try {
    await Waitlist.create({ email });
    return res.status(201).json({ message: "ok" });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: "Already joined" });
    }
    return res.status(500).json({ message: "Server error" });
  }
});

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/legends_arena";
const port = process.env.PORT || 4000;

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`backend listening on ${port}`);
    });
  })
  .catch((err) => {
    console.error("failed to connect", err);
    process.exit(1);
  });