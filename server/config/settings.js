module.exports = {
    topics :[
        "/homeoffice",
        "/granlund",
        "/pedab",
        "/smartoffice"
        ],
    consoleTopic: ["/console"],
    disconnect_window:60000,
    status_interval:30000,
    broker_ip:"192.168.1.19",
    broker_port:1883,
    mqtt_username:"",
    mqtt_password:"",
    mongodb_host: "mongodb://mitikubw:2016Mite@ds129281.mlab.com:29281/sensor-data",
    mongodb_username:"",
    mongodb_password:"2016Mite",
    webserver_port:3000,
    logDir:"./logging/logs"
}
