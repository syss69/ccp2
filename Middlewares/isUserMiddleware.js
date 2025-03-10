const checkIsUserToken = async (req, res, next) => {
  try {
    if (req.role === "Admin") {
      next();
    }
    const requestedUser = req.params.id;
    if (req.userId !== requestedUser) {
      return res.status(403).send("You have no rights to manipulate this user");
    }
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Iternal server error");
  }
};

export { checkIsUserToken };
