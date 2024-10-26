import mongoose from "mongoose";

const partySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    people: {
        type: [String],  
        default: [],    
    },
    tasks: {
        type: [String],  
        default: [],    
    },
}, {
    timestamps: true
});

export const Party = mongoose.model("Party", partySchema);