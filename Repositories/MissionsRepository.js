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
}

export default new repoMission();