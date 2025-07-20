import express from "express"
import { connectDB } from "./lib/db.js";
import "dotenv/config"
import job from "./lib/cron.js";


import router from "./routes/authRoutes.js";
import brouter from "./routes/bookRoutes.js";
import cors from "cors"


job.start()

connectDB()

const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

// /api/auth endpoint for authRoutes 

app.use("/api/auth",router)
app.use("/api/book",brouter)

app.listen(PORT,() => {
    console.log(`Server is runing on pott ${PORT}`)
})