import missionModel from "../Models/MissionsSchema.js";

class repoMission{
    async createMission(author, data){
        try{
            const mission = new missionModel({
                author: author,
                title: data.title,
                description: data.description,
            })
            await mission.save();
            return { status: true, message: "Mission saved", missionId: mission._id };
        }catch(err){
            console.error("err in repo", err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async modifyMission(id, data){
        try{
            const mission = await missionModel.findByIdAndUpdate(id, data, {
                new: true, 
                runValidators: true 
            })
            if(!mission) return {status: false, message: "mission does not exists"};
            return {status: true, message: "mission updated", mission: mission}
        }catch(err){
            console.error(err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async deleteMission(data){
        try{
            const mission = await missionModel.findByIdAndDelete(data);
            if (mission == null){
                return {status: false, message: "Mission does not exist"}
            }
            return {status: true, message: "Mission deleted"}
        }catch(err){
            console.error(err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async getActualMissions(){
        try{
            const missions = await missionModel.find({
            isActual: true
        })
        return missions;
        }catch(err){
            console.error(err.message);
            return { status: false, message: "Internal server error" };
        }
    }
}

export default new repoMission();