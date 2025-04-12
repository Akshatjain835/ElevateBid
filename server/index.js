import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

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


app.get("/", (req, res) => {

    res.send("Home Pages");
  });

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });