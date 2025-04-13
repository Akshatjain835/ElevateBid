import User from "../models/user.model.js";

// Only for admin users
export const getAllUserController = async (req, res) => {
    const userList = await User.find({});
  
    if (!userList.length) {
      return res.status(404).json({
         message: "No user found" 
        });
    }
  
   res.status(200).json({
      message: "User list",
      userList,
    });
  };

