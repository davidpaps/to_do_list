const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
  } catch (error) {
    console.error(err.message);
  }
});

//  get all todo's
//  get a todo
// update a todo
//  delete a todo

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
