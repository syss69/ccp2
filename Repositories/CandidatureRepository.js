import candidatureModel from "../Models/CandidaturesSchema.js";
import missionModel from "../Models/MissionsSchema.js";
import userModel from "../Models/UserSchema.js";

class repoCandidature{
    async createCandidature(id, data){
        try{
            const candidature = new candidatureModel({
                 participant: id,
                 mission: data
            });
            await candidature.save();
            return {status: true, message: "Your application has been sent"}
        }catch(err){
            console.error("err in repo", err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async approveCandidature(data){
        try{
            const candidature = await candidatureModel.findByIdAndDelete(data);
            if (!candidature){
                return {status: false, message: "Candidature not found"}
            }
            const mission = await missionModel.findByIdAndUpdate(candidature.mission, {$addToSet :{members: candidature.participant}}, {new: true});
            const user = await userModel.findByIdAndUpdate(candidature.participant, {$addToSet :{missions: data}}, {new: true});
            if(!mission || !user){
                return {status: false, message: "Check user and mission data!"}
            }
            return {status: true, message: "Candidature has been approved"}
        }catch(err){
            console.error("err in repo", err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async declineCandidature(data){
        try{
            const candidature = await candidatureModel.findByIdAndDelete(data);
            if (!candidature){
                return {status: false, message: "Candidature not found"}
            }
            return {status: true, message: "Candidature has been declined"}
        }catch(err){
            console.error("err in repo", err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async getAllForMission(data){
        try{
            const candidatures = await candidatureModel.find({mission: data});
            if (candidatures.length === 0){
                return {status: true, message: "No candidatures for this mission! Yet..."}
            }
            return {status: true, message: candidatures}
        }catch(err){
            console.error("err in repo", err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async getMyCandidatures(id){
        try{
            const candidatures = await candidatureModel.find({participant: id});
            if (candidatures.length === 0){
                return {status: true, message: "You have no candidatures... Yet!"}
            }
            return {status: true, message: candidatures}
        }catch(err){
            console.error("err in repo", err.message);
            return { status: false, message: "Internal server error" };
        }
    }
}

export default new repoCandidature();