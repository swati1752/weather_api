const request = require("postman-request");
const geocoding = (address,callback) =>{
const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1Ijoic3dhdGkxNzUyIiwiYSI6ImNreGFlaDkzdDNpZDcycXB6MG5tOGIzOWYifQ.ft8e3P3fg-f5OXPat6AlJg";
    request({url:url1},(error, res)=>{
        if(error){
            callback("Unable to connect to location services",undefined);
        }
        else if(res.body.message==="Not found"){
            callback("Cannot connect",);
        }
        else {
            const d = JSON.parse(res.body);
            const t = d.features[0];
            const data = {
                longitude: t.center[0],
                latitude: t.center[1],
                location: t.place_name
            }
            callback(undefined, data);
        }      
})
}

module.exports = geocoding;