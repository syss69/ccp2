import mongoose from "mongoose";
const { Schema } = mongoose;

const MissionSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    title: {
      type: String,
      required: true
    },
    description: String,
    members: Array,
    isActual: {
        type: Boolean, 
        default: true},
})

const missionModel = mongoose.model("Mission", MissionSchema);

export default missionModel;