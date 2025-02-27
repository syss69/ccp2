import repoMission from "../Repositories/MissionsRepository.js";

class missionServices{
    async createMissionService(author, data){
        return await repoMission.createMission(author, data)
    }
}

export default new missionServices();