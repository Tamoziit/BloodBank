import express from "express";
import path from "path";

const PORT = 5000;

const __dirname = path.resolve();

const app = express();
app.use(express.json()); 

//For Deployment
app.use(express.static(path.join(__dirname, "/frontend/dist"))); 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));  
})

app.listen(PORT, () => {
    console.log("Server is listening on port 5000");
});