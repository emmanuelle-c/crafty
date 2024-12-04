require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    cors({
      exposedHeaders: ["Authorization"],
      origin: [
        process.env.CLIENT_URL,
      ],
      credentials: true,
    })
  );

app.use("/api", router);
app.get("/api", (req,res) => res.send("it's all good"))

const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
.on("error", (err) => {
    console.error("Error:", err.message);
});

module.exports = app;