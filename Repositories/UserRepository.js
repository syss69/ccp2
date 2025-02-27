import userModel from "../Models/UserSchema.js";
import argon2 from "argon2"

class repoUser {
    async getUsersByRole(data){
        try{
            const users = await userModel.find({
                 role: data.role
            })
            return users;
    }catch(err){
        console.error(err.message)
        return  { status: false, message: "Internal server error" };
    }
    }

    async getUserByName(data){
        try{
            const user = await userModel.findOne({
                name: data.name
            })
            if(user){
                return user;
            }else{
                return {status: false, message: "User not found"}
            }
        }catch(err){
            console.error(err.message)
            return  { status: false, message: "Internal server error" };
        }
    }

    async getUserById(data){
        try{
            const user = await userModel.findById(data);
            if(user){
                return user;
            }else{
                return {status: false, message: "User not found"}
            }
        }catch(err){
            console.error( err.message)
            return  { status: false, message: "Internal server error" };
        }
    }

    async createUser(data){
        try{
            const user = new userModel({
                name: data.name,
                role: data.role,
                login: data.login,
                password: data.password
            })
            await user.save();
            return { status: true, message: "User saved", userId: user._id }
        }catch(err){
            if(err.message.slice(0, 26) === "E11000 duplicate key error"){
                return {status: false, message: "User with this login already exists"}
            }
            console.error(err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async deleteUser(data){
        try{
            const user = await userModel.findByIdAndDelete(data);
            if (user === null){
                return {status: false, message: "user does not exists"}
            }
            return {status: true, message: "user deleted"}
        }catch(err){
            console.error(err.message);
            return { status: false, message: "Internal server error" };
        }
    }

    async updateUser(id, data){
        try{
            const user = await userModel.findByIdAndUpdate(id, data, { 
                new: true, 
                runValidators: true 
              })
            if (!user) return {status: false, message: "user does not exists"};
            return {status: true, message: "user updated", user: user}
        }catch(err){
            console.error(err.message);
            return { status: false, message: "Internal server error" };
        }
    }
    
    async loginUser(data){
        try{
            const user = await userModel.findOne({
                login: data.login,
              });
            if(!user){
                return {
                    status: false,
                    message: "Username does not exist or password is not correct",}
            }
            const isPasswordValid = await argon2.verify(user.password, data.password);
            if (!isPasswordValid){
                return {
                    status: false,
                    message: "Username does not exist or password is not correct"}
            } 
            return { status: true, message: "Authentificated", userId: user._id, role: user.role};
            }catch(err){
                console.error(err.message)
                return  { status: false, message: "Internal server error" };
            }
    }
}

export default new repoUser();