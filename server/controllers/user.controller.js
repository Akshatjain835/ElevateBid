import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

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
      message: "User created successfully",
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

export const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const passwordIsCorrrect = await bcrypt.compare(password, user.password);

  const token = generateToken(user._id);

  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user && passwordIsCorrrect) {
    const { _id, name, email, photo, role } = user;

    res.status(201).json({
        message: "User logged in successfully",
      _id,
      name,
      email,
      photo,
      role,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
};
