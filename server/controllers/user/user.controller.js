import User from "../../models/user.model.js";
import { generateToken } from "../../utils/generateToken.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUserController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const userExits = await User.findOne({ email });

  if (userExits) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
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

  if (user && passwordIsCorrrect) {
    const token = generateToken(user._id);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      sameSite: "none",
      secure: true,
    });

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

export const loginStatusController = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json(false);
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      return res.json(true);
    }
    return res.json(false);
  } catch (error) {
    return res.json(false);
  }
};

export const logoutUserController = async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });

  return res.status(200).json({
    message: "Successfully Logged Out",
  });
};

export const loginAsSellerController = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    res.status(400).json({ 
      message: "Please provide email and password" 
    });
  }

  // Find the user by email
  const user = await User.findOne({ email });

  if (!user) {
    
   res.status(400).json({
      message: "User not found" 
    });
  }

  // Verify the password
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
   
    res.status(400).json({
      message: "Incorrect password" 
    });
  }

  // If password is correct, update the role to 'seller'
  user.role = "seller";

  await user.save();

  // Generate a token and set cookie
  const token = generateToken(user._id);

  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite: "none",
    secure: true,
  });

  // Send the response with updated user info
  const { _id, name, email: userEmail, photo, role } = user;

  res.status(200).json({
    message: "User logged in as seller successfully",
    _id,
    name,
    email: userEmail,
    photo,
    role,
    token,
  });
};

export const getUserController = async (req, res) => {
  
  const user = await User.findById(req.user._id).select("-password");

  res.status(200).json({
    message: "User retrieved successfully",
    user,
  });

};

export const  getUserBalanceController =async (req, res) => {

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json({
    message: "User balance retrieved successfully",
    balance: user.balance,
  });
};