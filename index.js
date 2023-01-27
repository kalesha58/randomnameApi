const cors=require("cors")
const express = require("express");
const data = require("./db.json");
const app = express();
app.use(cors())
app.use("/randomname", (req, res) => {
  const { first_name } = data[Math.round(Math.random() * data.length)];
  const { last_name } = data[Math.round(Math.random() * data.length)];
  return res.json({ first_name, last_name });
});

app.listen(3001, () => {
  console.log("App Listening.......");
});
