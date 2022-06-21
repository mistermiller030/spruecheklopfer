const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();


//Baut die MongoDB connection auf
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB!")
      } catch (error) {
        throw error
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongo disconected");
})

mongoose.connection.on("connected", ()=>{
    console.log("mongo connected");
})
//---------------------------//

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

//dummy route

app.get("/test/", (req,res) => {
    console.log(req.body)
    res.status(200).json({okay:"okay"});
  })


app.listen(8800, () =>{
    connect()
    console.log("Backend Server is running")
})