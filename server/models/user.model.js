import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        require: [true, "Please add a name"],
      },
      email: {
        type: String,
        require: [true, "Please add a email"],
        unique: true,
        trim: true,
        match: [/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/, "Please enter a valid email"],
      },
      password: {
        type: String,
        require: [true, "Please add a password"],
        minLength: [8, "Password must be up to 8 characters"],
      },
      photo: {
        type: String,
        require: [true, "Please add a photo"],
        default: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
      },
      role: {
        type: String,
        enum: ["admin", "seller", "buyer"],
        default: "buyer",
      },
      commissionBalance: {
        type: Number,
        default: 0,
      },
      balance: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

  const User= mongoose.model("User", userSchema);
  export default User;