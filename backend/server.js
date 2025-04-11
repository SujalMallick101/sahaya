const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cors(
//     {
//         credentials: true
//     }
// ));

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    allowHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Credentials"]
}

app.use(cors(corsOptions));

// Connect to Database
const dbConnect = require("./config/db");
dbConnect();

// Routes
const authRoute = require("./routers/authRoute");
app.use("/auth", authRoute);

const schemeRoute = require("./routers/schemeRoute");
app.use("/schemes", schemeRoute);

// Default route
app.get("/", (req, res) => {
    res.send("Default route");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})