import candidatureServices from "../Services/CandidatureService.js";

class candidatureController{
    async createCandidature(req, res){
        try{
            const candidature = await candidatureServices.createCandidatureService(req.userId, req.params.id);
            if (candidature.status === false){
                return res.status(409).json(candidature)
            }
            return res.status(201).json(candidature)
        }catch(err){
            console.error(err.message)
            return  { status: false, message: "Internal server error" };
        }
    }

    async approveCandidature(req, res){
        try{
            const resultat = await candidatureServices.approveCandidatureService(req.params.id);
            if(resultat.status === false){
                return res.status(409).json(resultat)
            }
            return res.status(200).json(resultat)
        }catch(err){
            console.error(err.message)
            return  { status: false, message: "Internal server error" };
        }
    }

    async declineCandidature(req, res){
        try{
            const resultat = await candidatureServices.declineCandidatureService(req.params.id);
            if(resultat.status === false){
                return res.status(409).json(resultat)
            }
            return res.status(200).json(resultat)
        }catch(err){
            console.error(err.message)
            return  { status: false, message: "Internal server error" };
        }
    }

    async getAllByMission(req, res){
        try{
            const candidatures = await candidatureServices.getAllByMissionService(req.params.id);
            if(candidatures.status === false){
                return res.status(409).json(candidatures)
            }
            return res.status(200).json(candidatures)
        }catch(err){
            console.error(err.message)
            return  { status: false, message: "Internal server error" };
        }
    }

    async getMyCandidatures(req, res){
        try{
            const candidatures = await candidatureServices.getMyCandidaturesService(req.userId);
            if(candidatures.status === false){
                return res.status(409).json(candidatures)
            }
            return res.status(200).json(candidatures)
        }catch(err){
            console.error(err.message)
            return  { status: false, message: "Internal server error" };
        }
    }
}

export default new candidatureController();