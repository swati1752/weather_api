
console.log("CLient");

const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');




weatherform.addEventListener('sumbit' ,(e) => {
    e.preventDefault()
    console.log("testing");
    // const location = search.value
    // document.querySelector('#message-1').innerHTML = location;
    // messageOne.textContent = "Loading..."; 
    //  fetch(`http://localhost:3000/weather?address=!`).then((res) => {
    //     res.json().then((data) =>{
    //         if(data.err) {
    //             console.log(data.error)
    //         }
    //         else{
    //             messageOne.textContent = data.location
    //             messageTwo.textContent = data.forecast
    //         }
    //     })
    // })
});


