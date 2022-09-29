const connection = require("./db/db");
const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute");
const JobRoute = require("./routes/JobRoute");


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000","https://harmonious-clafoutis-0cfde6.netlify.app"],
    })
  );
app.use("/static",express.static("./Profiles"));
app.use("/user",UserRoute);
app.use("/job",JobRoute);
//testing
app.get("/",(req,res)=>{
  res.send("ai jobs backend working....")
})

// starting the server && checking db connection
const PORT = process.env.PORT || 8060
app.listen(PORT, async () => {
    try {
      await connection;
      console.log("Connected to Database Successfully &");
    } catch (err) {
      console.log(err);
    }
    console.log("Backend is working at http://localhost:8060");
});

