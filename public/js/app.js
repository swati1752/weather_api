
const weatherform = document.querySelector('form');
const search = document.querySelector('input');

weatherform.addEventListener('sumbit' , (e)=>{
    e.preventDefault();
    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
        res.json().then((data) =>{
            if(data.err) {
                console.log(data.error)
            }
            else{
                console.log(data.location);
                console.log(data.forecast);
            }
        })
    })
})

