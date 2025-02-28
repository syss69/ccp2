const checkAdmin = async (req, res, next) => {
    const userRole = req.role;
    if(userRole !== "Association"){
        return res.status(401).send("Only associations can modify missions")
    }
    next()
}

export {checkAdmin};