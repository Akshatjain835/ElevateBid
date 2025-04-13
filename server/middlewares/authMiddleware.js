import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


export const protectMiddleware =async (req, res, next) => {
    try {

      const token = req.cookies.token;
    //   console.log("Token:", token);

      if (!token) {
        return res.status(401).json({ 
            message: "Not authorized, Please Login" 
        });
        
      }

      const verified = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(verified.id).select("-password");

      if (!user) {
        return res.status(401).json({ 
            message: "User Not Found" 
        });
      }

      req.user = user;

      next();

    } catch (error) {

     return res.status(401).json({ 
        message: "Not authorized, Please Login"
     });
    }
  };