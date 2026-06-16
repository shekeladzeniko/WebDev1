import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
      username: String,
      password: String,
      displayName: String,
      role: {type: String, enum: ["admin", "editor", "viewer"],
            
      },
});

export const User = mongoose.model("User", userSchema);