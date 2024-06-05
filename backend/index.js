import express from "express";
import users from "./user";
const app = express()
const apiRoutes = require('./routes/api');
const mongoConnect = require('./db/mongoConnect');
mongoConnect();
app.use('/', apiRoutes);
app.get("/",(req,res)=>{
    res.send("server is redy")

})
app.get("/api/user",(req,res)=>{
    res.send(users)
})
const port = process.env.PORT||3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});