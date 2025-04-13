import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
    express.urlencoded({
      extended: false,
    })
  );
  app.use(bodyParser.json());
  
app.use(
    cors({
      origin: ["http://localhost:5173", "https://production-url.com"],
      credentials: true,
    })
  );

const PORT = process.env.PORT || 5000;

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);


app.get("/", (req, res) => {

    res.send("Home Pages");
  });

connectDB().then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
      });
})