const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const mongoose = require('mongoose');
//const config = require('../config/database');
const config = require('../config/settings');
const db = mongojs('mongodb://mitikubw:2016Mite@ds129281.mlab.com:29281/sensor-data');

//Connect to database
mongoose.connect(config.mongodb_host, { useMongoClient: true });

//On connect
mongoose.connection.on('connected', () =>{
  console.log('Connected to database '+ config.mongodb_host);
});

//On error
mongoose.connection.on('error', (err) =>{
  console.log('Database connection error '+ err);
});
/* GET api listing. */
router.get('/', (req, res, next) => {
  //res.send('api works');
 
  db.history.find((err, history) =>{
      if(err){
          res.send(err);
      }
      res.json(history);
  });
});

/* GET get single sensor data. */
router.get('/:mac', (req, res, next) => {
  //res.send('api works');
 
  db.history.findOne({mac:{'$exists': 1}}, (err, sensor_data) =>{
      if(err){
          res.send(err);
      }
      res.json(sensor_data);
  });
});

module.exports = router;