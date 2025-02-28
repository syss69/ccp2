import repoUser from "../Repositories/UserRepository.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class userServices {
    async createUserService(data){
        try{
            data.password = await argon2.hash(data.password);
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
            const update = await repoUser.updateUser(id, data);
            const updatedUser = update.user;
            console.log(data.userId)
            const token = jwt.sign({userId: updatedUser._id, role: updatedUser.role}, process.env.key, {expiresIn: "1h"});
            return {info: update, token: token};
        }catch(err){
            console.error("Error in services:");
            return {status: false, message: err.message}
        }
    }

    async loginUserService(data){
        try{
            const user = await repoUser.loginUser(data)
            if(user.status === false){
                return user;
            }
            const token = jwt.sign({userId: user.userId, role: user.role}, process.env.key, {expiresIn: "1h"});
            return {status: true, token}
        }catch(err){
            console.error("Error in services:");
            return {status: false, message: err.message}
        }
    }
}

export default new userServices();