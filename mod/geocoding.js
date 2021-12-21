const request = require("postman-request");
const geocoding = (address,callback) =>{
const url1 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&access_token=pk.eyJ1Ijoic3dhdGkxNzUyIiwiYSI6ImNreGFlaDkzdDNpZDcycXB6MG5tOGIzOWYifQ.ft8e3P3fg-f5OXPat6AlJg`;
    request({url:url1},(error, res)=>{
        if(error){
            callback("Unable to connect to location services",undefined);
        }
        else if(JSON.parse(res.body).features.length === 0){
            callback("Enter correct location",undefined);
        }
        else {
            const d = JSON.parse(res.body);
            const data = {
                latitude: d.features[0].center[1],
                longitude: d.features[0].center[0],
                location: d.features[0].place_name
            }
            callback(undefined, data);
        }      
})
}

module.exports = geocoding;