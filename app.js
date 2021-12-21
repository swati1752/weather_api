const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocoding = require('./mod/geocoding');
const forecast = require('./mod/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=d4ccf933ce01e0e713f676ed3d7232e1&query=37.8267,-122.4233';

const app = express();

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '/public');
const viewspath = path.join(__dirname , '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')


app.set('view engine' , 'hbs');
app.set('views' ,viewspath );
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));


app.get('', (req,res)=>{
    res.render('index');
})

app.get('/about' , (req,res)=>{
    res.render('about');
})

app.get('/help', (req,res)=>{
    res.render('help');
})

app.get('/weather' , (req,res) =>{
    if(!req.query.address){
        return res.send({error:'you must provide address!'});
    }
    else {
    geocoding( req.query.address , (error,{latitude, longitude , location} = {}) =>{
        if(error){
            return res.send({error});
        }
        forecast(  latitude, longitude , (error,forecastData) =>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address: req.query.address
            })
        })
    })

}

})


app.get("*" , (req,res)=>{
    res.render('pg404',{
        title:"404",
        name:"Unknown",
        errorMsg:"Page Not Found"
    });
})


app.listen(port , ()=>{
    console.log(`Server running at PORT ${port}`);
})