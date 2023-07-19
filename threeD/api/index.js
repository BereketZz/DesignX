
import express from "express"
import cors from "cors"
import * as dotenv from 'dotenv'
import dallPath from "./routes/dalle.js"

dotenv.config()


const app= express()
app.use(cors())
app.use(express.json({limig:"50mb"}))

app.use('/api/v1/dalle', dallPath)

// app.get('/',(req, res)=>{
//     res.send("hello world")
// })

app.listen(4000, "localhost", ()=>console.log("Server is listning on port 4000"))