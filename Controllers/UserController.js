import userServices from "../Services/UserServices.js";

class userController {
  async createUser(req, res) {
    try {
      const newUser = await userServices.createUserService(req.body);
      if (newUser.status == false) {
        return res.status(409).json(newUser);
      }
      return res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }

  async getUserByName(req, res) {
    try {
      const user = await userServices.getUserByNameService(req.params.name);
      if (user.status == false) {
        return res.status(404).json(user);
      }
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userServices.getUserByIdService(req.params.id);
      if (user.status == false) {
        return res.status(404).json(user);
      }
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }

  async getUsersByRole(req, res) {
    try {
      const users = await userServices.getUsersByRoleService(req.params.role);
      if (users.status == false) {
        return res.status(404).json(users);
      }
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userServices.deleteUserService(req.params.id);
      if (user.status == false) {
        return res.status(404).json(user);
      }
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userServices.updateUserService(
        req.params.id,
        req.body
      );
      if (user.status == false) {
        return res.status(404).json(user.info);
      }
      return res
        .status(200)
        .cookie("token", user.token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
        })
        .json(user.info);
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }

  async loginUser(req, res) {
    try {
      const response = await userServices.loginUserService(req.body);
      if (response.status == false) {
        return res.status(401).json(response);
      }
      return res
        .status(200)
        .cookie("token", response.token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({ status: response.status, user: response.userData });
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }

  async getMe(req, res) {
    try {
      const me = await userServices.getUserByIdService(req.userId);
      return res.status(200).json(me);
    } catch (err) {
      res.status(500).json({ status: false, message: err.message });
    }
  }
}

export default new userController();
