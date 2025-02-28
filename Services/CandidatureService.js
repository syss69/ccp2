import repoCandidature from "../Repositories/CandidatureRepository.js";

class candidatureServices {
    async createCandidatureService(id, data){
        return await repoCandidature.createCandidature(id, data);
    }

    async approveCandidatureService(data){
        return await repoCandidature.approveCandidature(data);
    }

    async declineCandidatureService(data){
        return await repoCandidature.declineCandidature(data)
    }

    async getAllByMissionService(data){
        return await repoCandidature.getAllForMission(data)
    }

    async getMyCandidaturesService(id){
        return await repoCandidature.getMyCandidatures(id)
    }
}

export default new candidatureServices();