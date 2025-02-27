import missionServices from "../Services/MissionService.js";

class missionController{
    async createMission(req, res){
        try{
            const newMission = await missionServices.createMissionService(req.userId, req.body);
            return res.status(201).json(newMission)
        }catch(err){
            console.error(err.message)
            return  { status: false, message: "Internal server error" };
        }
    }
}

export default new missionController();