const request = require("postman-request");
// const geocoding = require('geocoding');

const forecast = (x , y , callback) =>{
    const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${x},${y}.json?access_token=pk.eyJ1Ijoic3dhdGkxNzUyIiwiYSI6ImNreGFlaDkzdDNpZDcycXB6MG5tOGIzOWYifQ.ft8e3P3fg-f5OXPat6AlJg`;
    request({url:url2 , JSON:true},(error, res)=>{
        if(error){
            callback("Unable to connect to location services",undefined);
        }
        else if(res.body.message==="Not found"){
            callback(res.body.message);
        }
        else {
            const d = JSON.parse(res.body);
            callback(d,url2);
        }
        }      
    )}

module.exports=forecast;