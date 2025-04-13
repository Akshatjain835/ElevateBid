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

export const estimateIncomeController =async (req, res) => {

    try {
      const admin = await User.findOne({ role: "admin" });

      if (!admin) {
        return res.status(404).json({ 
            error: "Admin user not found" 
        });
      }

      const commissionBalance = admin.commissionBalance;
    //   console.log(comissionBalance)

      res.status(200).json({
        message: "Commission balance fetched successfully",
        commissionBalance,
      });

    } catch (error) {

    //   console.error(error);
      res.status(500).json({ 
        error: "Internal server error"
     });
    }
  };