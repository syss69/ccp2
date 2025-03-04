import missionServices from "../Services/MissionService.js";

class missionController {
  async createMission(req, res) {
    try {
      const newMission = await missionServices.createMissionService(
        req.userId,
        req.body
      );
      if (newMission.status !== true) return res.status(409).json(newMission);
      return res.status(201).json(newMission);
    } catch (err) {
      console.error(err.message);
      return { status: false, message: "Internal server error" };
    }
  }

  async modifyMission(req, res) {
    try {
      const mission = await missionServices.modifyMission(
        req.params.id,
        req.body
      );
      if (mission.status === false) return res.status(409).json(mission);
      return res.status(200).json(mission);
    } catch (err) {
      console.error(err.message);
      return { status: false, message: "Internal server error" };
    }
  }
  async deleteMission(req, res) {
    try {
      const mission = await missionServices.deleteMission(req.params.id);
      if (mission.status === false) return res.status(409).json(mission);
      return res.status(200).json(mission);
    } catch (err) {
      console.error(err.message);
      return { status: false, message: "Internal server error" };
    }
  }
  async getActualMissions(req, res) {
    try {
      const missions = await missionServices.getActualMissions();
      return res.status(200).json(missions);
    } catch (err) {
      console.error(err.message);
      return { status: false, message: "Internal server error" };
    }
  }
  async getMyMissions(req, res) {
    try {
      const missions = await missionServices.getMyMissionsService(req.userId);
      if (missions.status === false) return res.status(409).json(missions);
      return res.status(200).json(missions);
    } catch (err) {
      console.error(err.message);
      return { status: false, message: "Internal server error" };
    }
  }
}

export default new missionController();
