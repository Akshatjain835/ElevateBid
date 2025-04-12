import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUserController = async (req, res) => {

    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {

      res.status(400).json({ message: "Please fill all fields" });
    }
  
    const userExits = await User.findOne({ email });

    if (userExits) {
      return res.status(400).json({ message: "User already exists" });
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    const token = generateToken(user._id);
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
  
    if (user) {
      const { _id, name, email, photo, role } = user;
      return res.status(201).json({
        _id,
        name,
        email,
        photo,
        role,
        token,
      });
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  };