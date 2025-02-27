import userModel from "../Models/UserSchema.js";
import jwt from "jsonwebtoken"

const checkToken = async (req, res, next) => {
    const userCookie = req.cookies.token;
    if(!userCookie){
        return res.status(401).send("cookie missed")
    }
    try{
        const decoded = jwt.verify(userCookie, process.env.key);
        const userId = decoded.userId;
        const user = await userModel.findById(userId);
        if(!user){
            return res.status(401).send("Your token is invalid, please try to reconnect to the srvice")
        }
        req.userId = userId;
        next()
    }catch(err){
        console.error(err.message)
        res.status(500).send("Iternal server error")
    }
}

export {checkToken};