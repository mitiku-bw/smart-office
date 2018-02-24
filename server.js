// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const moment = require('moment');



// Get our API routes
const api = require('./server/routes/api');
const sensorManager = require('./server/routes/sensorManager.js');
const users = require('./server/routes/users');


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//require('./server/config/passport')(passport);


/*Access-Control-Allow-Origin*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); // ??????????
});


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

app.use('/users', users);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

sensorManager.server = server;

//Socket io connection
const io = require('socket.io').listen(server);
//sensorManager.update_status(generateMessage(), io);
setInterval(function(){ sensorManager.update_status(generateMessage(), io); }, 10000);

                    
function generateMessage(){
  var locationArray = [
                        { 'location': '183 Sensor-0', 'mac': 'b0b448ee0183', 'office': 'Aula office' }, 
                        { 'location': 'c86 Sensor-1', 'mac':'a0e6f8c23c86', 'office': 'Home office' }, 
                        { 'location': '580 Sensor-2', 'mac':'a0e6f8b67580', 'office': 'Home office' }, 
                        { 'location': '306 Sensor-3', 'mac':'a0e6f8ae3306', 'office': 'Home office' },
                        { 'location': 'f05 Sensor-4', 'mac':'b0b448ee2f05', 'office': 'Home office' }, 
                        {'location': '605 Sensor-5', 'mac':'247189e66605', 'office': 'Home office' }
                    ];
	var read_time = moment.now();
	var lIndex = Math.floor(Math.random()*locationArray.length);
	
	var message = { "read_time": read_time, 
	                "location": locationArray[lIndex].location, 
	                "office": locationArray[lIndex].office, 
	                "mac":locationArray[lIndex].mac,
	                "humidity": getRandomNum(15,40), 
	                "temperature": getRandomNum(15,40), 
	                "pressure": getRandomNum(800,1500), 
	                "lux":getRandomNum(80,220), 
	                "loudness": getRandomNum(35,80) 
	              };
	return message;
}            

function getRandomNum(min,max){
    return Math.random()*(max-min+1) + min;
}
//io.sockets.emit('sensor_data', message.toString());	

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

