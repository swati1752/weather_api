const request = require('postman-request');
const geocoding = require('./mod/geocoding');
const forecast = require('./mod/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=d4ccf933ce01e0e713f676ed3d7232e1&query=37.8267,-122.4233';


geocoding('Bosten' , (err,data) =>{
    var x = data.latitude;
    var y = data.longitude;
    // var places = data.location;
    forecast(x , y , (data, url) =>{
        console.log(data);
        console.log(url);
    })
})



// forecast("Los Angeles" , (error, data)=>{
//     console.log(error);
//     console.log(data); 
// });

// forecast(3 , 4, (u)=>{
//     console.log(`hey its ${u} `);
// });