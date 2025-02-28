import missionModel from "../Models/MissionsSchema.js"

const checkIsAuthor = async (req, res, next) => {
    try{
        const requestedMission = await missionModel.findById(req.params.id);
        console.log(req.userId)
        console.log(requestedMission.author)
        if(req.userId != requestedMission.author){
            return res.status(401).send("You have no rights to manipulate with this mission")
        }
        next();
    }catch(err){
        console.error(err.message)
        res.status(500).send("Iternal server error")
    }
}

export {checkIsAuthor}
