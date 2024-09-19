// const express = require("express");
import express from "express";
const app = express();
const port = 4234;

app.set("views", "templates");
app.set("view engine", "html");

app.use(express.urlencoded({ extended: true }));
app.use("/resources", express.static("resources"));
app.use(express.json());

import * as convert from "./resources/js/conversions.js";


app.get("/", (req, res) => {
    res.render("mainpage.pug")
})

app.get("/main", (req, res) => {
    res.render("mainpage.pug")
})

app.get("/weightcalc", (req, res) => {
  res.render("weight_calc.pug")
})

app.post("/api/convert", (req, res)=> {
  const { inputWeight, fromUnit, toUnit } = req.body;
  const finalUnit = convert.convertWeight(inputWeight, fromUnit, toUnit);
  res.json({finalUnit});
  res.status(200).end();
});

app.post("/api/calcConvert", (req, res) => {
  const {option1, option2, input1, input2} = req.body;
  const final = convert.weightCalc(option1, option2, input1, input2);
  res.json({"add_val_1": final.add_val_1, "add_val_2": final.add_val_2, "sub_val_1": final.sub_val_1, "sub_val_2": final.sub_val_2, "unit1": final.unit1, "unit2": final.unit2});
  res.status(200).end();
})



app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });