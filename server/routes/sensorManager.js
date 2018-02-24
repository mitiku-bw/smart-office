//var moment = require('moment');

// 1h = 3600000 ms, 2h = 7200000 ms, 1 min = 60000 ms
const disconnect_window = 60000;
const status_interval = 10000;

var connected_sensors = [];
var MacList = [];
//var check_status_called = false;


module.exports.update_status = function update_status(message, io) {

    console.log(message);
    var obj = message;
	
	var found = false;
	var found_MAC_index;
	for (var i = 0; i < connected_sensors.length; i++) {
		/*console.log("Connected sensor NO. " + i + " " + JSON.stringify(connected_sensors[i]));*/
		if (obj.mac == connected_sensors[i].mac) { 
			found = true; 
			found_MAC_index = i; 
		}
	}
	/* MAC was found. Update the values.  */
	if (found) {

		//logger.log('debug', 'MAC: ' + connected_sensors[found_MAC_index].MAC + ' found, updating values. ');
		console.log('MAC: ' + connected_sensors[found_MAC_index].mac + ' found, updating values... ');

		// Update sensor data
		connected_sensors[found_MAC_index].last_scan_time = connected_sensors[found_MAC_index].read_time;
		connected_sensors[found_MAC_index].read_time = obj.read_time;
		/*update other readings as well*/
		connected_sensors[found_MAC_index].temperature = obj.temperature;
		connected_sensors[found_MAC_index].humidity = obj.humidity;
		connected_sensors[found_MAC_index].pressure = obj.pressure;
		connected_sensors[found_MAC_index].lux = obj.lux;
		connected_sensors[found_MAC_index].loudness = obj.loudness;
		//update_min_max();

		if (connected_sensors[found_MAC_index].status == "offline") {
			connected_sensors[found_MAC_index].status = 'online';
			connected_sensors[found_MAC_index].updated = true;
		} 
		else connected_sensors[found_MAC_index].updated = false;
		
	}
	/* MAC was not found */
	else {
		// Add MAC to the array
		var a = { 
			"mac": obj.mac, "location": obj.location, "office": obj.office, "status": "online", "read_time": obj.read_time,"last_scan_time": obj.read_time, "updated": false,
			"humidity": parseFloat(obj.humidity), 
			"temperature": parseFloat(obj.temperature),
			"pressure": parseFloat(obj.pressure),
			"lux": parseFloat(obj.lux),
			"loudness": parseFloat(obj.loudness)
		};
			updateMacList(a, "add", io);
	}
	
	io.sockets.emit('sensor_status', connected_sensors);

    // Calling function for the first time
	/*if (check_status_called == false) {
		//Check_status(io) function is called every status_interval
		//setInterval(check_status, status_interval, io);
		check_status(io);
		check_status_called = true;
	}*/

}


/**
 * 
 * This functions checks whether sensors are still online or 
 * they have disconnected. 
 * 
 * */
function check_status(io) {

	var ts_now = moment.now();
	
	// Scan the array of sensors and compare the values
	if (connected_sensors.length > 1) {
		console.log('Checking status...\n');
		for (var i = 0; i < connected_sensors.length; i++) {

			//console.log('connected_sensors[' + i + '].MAC: ' + connected_sensors[i].MAC + '(' + connected_sensors[i].status + ')');

			if (connected_sensors[i].status == "online") {

				// Here we check if sensor time since last scan was 1 min
				if (ts_now - connected_sensors[i].last_scan_time > disconnect_window) {

					console.log('MAC: ' + connected_sensors[i].mac + ' has disconnected.');
					connected_sensors[i].status = "offline";
					connected_sensors[i].updated = true;
				}
				//getMinMaxAvg(connected_sensors[i].location);
			}
		}
	}
	io.sockets.emit('sensor_status', connected_sensors);
	//emitLocationList(io);

}

function emitLocationList(io) {
	if (connected_sensors == null || connected_sensors.length < 1) {
		console.log('error', 'connected_sensors empty');
		return;
	} else {
		io.sockets.emit('sensor_status', connected_sensors);
	}
}


function updateMacList(a, action, io) {
	if (action == "remove") {
		connected_sensors.pop(a);
		MacList.pop(a.mac);
	}
	else if (action == "add") {
		//var key = a.mac;
		connected_sensors.push(a);
	}
	
	//emitLocationList(io);
}

module.exports.emitLocationList = emitLocationList;