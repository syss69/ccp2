import missionModel from "../Models/MissionsSchema.js";

const checkIsAuthor = async (req, res, next) => {
  try {
    const requestedMission = await missionModel.findById(req.params.id);
    if (!requestedMission) {
      return res.status(404).send("Can't find requested mission");
    }
    if (req.userId != requestedMission.author) {
      return res
        .status(403)
        .send("You have no rights to manipulate with this mission");
    }
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal server error");
  }
};

export { checkIsAuthor };
