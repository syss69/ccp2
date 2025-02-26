import mongoose from "mongoose";
const { Schema } = mongoose;

const CandidatureSchema = new Schema({
    participant:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true},
    mission:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mission",
        required: true},
})