import repoUser from "../Repositories/UserRepository.js";

class userServices {
    async createUserService(data){
        try{
            return await repoUser.createUser(data)
        }catch(err){
            console.error("Error in services");
            return {status: false, message: err.message}
        }
    }

    async getUserByNameService(data){
        try{
            return await repoUser.getUserByName(data)
        }catch(err){
            console.error("Error in services");
            return {status: false, message: err.message}
        }
    }

    async getUserByIdService(data){
        try{
            return await repoUser.getUserById(data)
        }catch(err){
            console.error("Error in services");
            return {status: false, message: err.message}
        }
    }

    async getUsersByRoleService(data){
        try{
            return await repoUser.getUsersByRole(data);
        }catch(err){
            console.error("Error in services:");
            return {status: false, message: err.message}
        }
    }

    async deleteUserService(data){
        try{
            return await repoUser.deleteUser(data);
        }catch(err){
            console.error("Error in services:");
            return {status: false, message: err.message}
        }
    }

    async updateUserService(id, data){
        try{
            return await repoUser.updateUser(id, data)
        }catch(err){
            console.error("Error in services:");
            return {status: false, message: err.message}
        }
    }

    async loginUserService(data){
        try{
            return await repoUser.loginUser(data)
        }catch(err){
            console.error("Error in services:");
            return {status: false, message: err.message}
        }
    }
}

export default new userServices();