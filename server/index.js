const express=require('express')
const cors=require('cors')
const repos=require('./routes/repo-route')
const commits=require('./routes/commits-route')

require('dotenv').config()

const port=process.env.PORT || 3001

const app=express()
app.use(cors())

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
    app.use("/",repos)
    app.use("/",commits)
})