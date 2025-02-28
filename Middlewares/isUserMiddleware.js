
const checkIsUserToken = async (req, res, next) => {
    try{
        const requestedUser = req.params.id;
        if (req.userId !== requestedUser){
            return res.status(401).send("You have no rights to manipulate this user")
        }
        next();
    }catch(err){
        console.error(err.message)
        res.status(500).send("Iternal server error")
    }
}

export {checkIsUserToken};