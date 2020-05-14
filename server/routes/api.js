const express = require("express");
const router = express.Router();
const urllib = require("urllib");
const moment = require("moment");
const request = require("request");
const City = require("../model/City");
const mongoose = require("mongoose");
const axios = require("axios");
mongoose.connect("mongodb://localhost/CityDB", { useNewUrlParser: true });
const key = "d04f35379c20a6aebd99f04799f98f29";

//get city info from external api
router.get("/reqest/:city", function (req, res) {
  const city = req.params.city;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${key}`
    )
    .then(function (response) {
      res.send({
        name: response.data.name,
        temperature: Math.floor(response.data.main.temp),
        condition: response.data.weather[0].description,
        conditionPic: response.data.weather[0].icon,
      });
    });
});
//save city
router.post("/city", function (req, res) {
  const cityInfo = req.body;
  const city = new City({
    name: cityInfo.name,
    temperature: cityInfo.temperature,
    condition: cityInfo.condition,
    conditionPic: cityInfo.conditionPic,
  });
const save = city.save()
save.then(function(city){
  res.send(`saved ${city.name}`)
})
});
//delete city
router.delete("/city/:name", function (req, res) {
  debugger
  const cityName = req.params.name;
  console.log(cityName)
  City.deleteOne({name:cityName})
    .then(function(data){
   res.send("deleted successfully")
  
});
})
// get all cities
router.get("/cities", function (req, res) {
City.find({})
.then(function(data){
  res.send(data)
})
})
module.exports = router;
