import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});

export const User = mongoose.model("User", userSchema);