import repoMission from "../Repositories/MissionsRepository.js";

class missionServices {
  async createMissionService(author, data) {
    return await repoMission.createMission(author, data);
  }

  async modifyMission(id, data) {
    return await repoMission.modifyMission(id, data);
  }

  async deleteMission(data) {
    return await repoMission.deleteMission(data);
  }

  async getActualMissions() {
    return await repoMission.getActualMissions();
  }

  async getMyMissionsService(data) {
    return await repoMission.getMyMissions(data);
  }
}

export default new missionServices();
