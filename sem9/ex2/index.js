"use strict";
const express = require("express");
const sequelize = require("./sequelize");
const Employee = require("./models/employee");
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 7000);
app.post("/employees", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch employees" });
  }
});

app.listen(app.get("port"), async () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
