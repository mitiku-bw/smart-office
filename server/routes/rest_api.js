var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://mitikubw:2016Mite@ds129281.mlab.com:29281/sensor-data');

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