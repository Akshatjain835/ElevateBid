import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/user/user.route.js";
import adminRouter from "./routes/admin/admin.route.js";
import path from "path";
import { fileURLToPath } from "url";
import productSellerRouter from "./routes/seller/product.route.js";
import productUserRouter from "./routes/user/productUser.route.js";
import adminProductRouter from "./routes/admin/adminProduct.route.js";

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

app.use("/api/users", userRouter);

app.use("/api/admin", adminRouter);
app.use('/api/admin/product',adminProductRouter)

app.use('/api/product/seller', productSellerRouter);
app.use('/api/product/users', productUserRouter);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.get("/", (req, res) => {

    res.send("Home Pages");
  });

connectDB().then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
      });
})