const request = require("postman-request");
const forecast = (x , y , callback) =>{
    const url2 = `http://api.weatherstack.com/current?access_key=d4ccf933ce01e0e713f676ed3d7232e1&query=${x},${y}`;
    request({url:url2 , JSON:true},(error, res)=>{
        if(error){
            callback("Unable to connect to location services",undefined);
        }
        else if(res.body.message==="Not found"){
            callback(res.body.message);
        }
        else {
            const d = JSON.parse(res.body);
            const forecast = `Temperature of the place at time ${d.current.observation_time} is ${d.current.temperature}°C and visibility is ${d.current.visibility}`;
            callback(error,forecast);
        }
        }      
    )}

module.exports=forecast;