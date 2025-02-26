import mongoose from "mongoose";
const { Schema } = mongoose;

const MissionSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    title: String,
    description: String,
    members: Array,
    isActual: {
        type: Boolean, 
        default: True},
})

const missionModel = mongoose.model("Mission", MissionsSchema);

export default missionModel;