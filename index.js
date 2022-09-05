const express = require("express");
const cors = require("cors");
const userRouter = require("./Routers/user.route");
const { default: rateLimit } = require("express-rate-limit");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());





app.use("/user", userRouter)
// app.use("/random", userRouter)

app.get('/', (req,res)=>{
    res.send('First assignment ')
})
app.listen(port,()=>{
    console.log(`First assignment  ${port}`)
})