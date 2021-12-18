const request = require('postman-request');
const geocoding = require('./mod/geocoding');
const forecast = require('./mod/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=d4ccf933ce01e0e713f676ed3d7232e1&query=37.8267,-122.4233';


geocoding('Bosten' , (err,data) =>{
    if(err){
        return console.log(`no connection`);
    }
    forecast(  data.latitude, data.longitude , (err,data) =>{
        if(err){
            return console.log(`no connect`);
        }
        console.log(data);
    })
})



// forecast("Los Angeles" , (error, data)=>{
//     console.log(error);
//     console.log(data); 
// });

// forecast(3 , 4, (u)=>{
//     console.log(`hey its ${u} `);
// });