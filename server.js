// const express = require("express");
import express from "express";
const app = express();
const port = 4234;

app.set("views", "templates");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use("/resources", express.static("resources"));
app.use(express.json());

//importing functions so that we may do conversions
import * as convert from "./resources/js/conversions.js";


app.get("/", (req, res) => {
    res.render("mainpage.pug")
})

//mainpage which holds the weight convertor
app.get("/main", (req, res) => {
    res.render("mainpage.pug")
})

//renders the weight calculation page
app.get("/weightcalc", (req, res) => {
  res.render("weight_calc.pug")
})

//This is where we use post to convert data from one 
//unit to another
app.post("/api/convert", (req, res)=> {
  //gathering initial data from the body and setting it to our 
  //own objectg
  const { inputWeight, fromUnit, toUnit } = req.body;
  //conversion of the units
  const finalUnit = convert.convertWeight(inputWeight, fromUnit, toUnit);
  //sending a json file to the frontend with converted units
  res.json({finalUnit});
  res.status(200).end();
});


//This is where we use post again in order to calculate
//data to send to the frontend
app.post("/api/calcConvert", (req, res) => {
  const {option1, option2, input1, input2} = req.body;
  const final = convert.weightCalc(option1, option2, input1, input2);
  //Sending in a long json file so we can output
  //our values as thoroughly as possible
  res.json({"add_val_1": final.add_val_1, "add_val_2": final.add_val_2, "sub_val_1": final.sub_val_1, "sub_val_2": final.sub_val_2, "unit1": final.unit1, "unit2": final.unit2});
  res.status(200).end();
})


//A little 404 error page in case of using the wrong url
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });