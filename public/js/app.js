const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');




weatherform.addEventListener('submit' ,(e) => {
    e.preventDefault()
    // console.log("testing");
    const location = search.value
    document.querySelector('#message-1').innerHTML = location;
    messageOne.textContent = "Loading..."; 
    messageTwo.textContent = "";
     fetch(`/weather?address=${location}`).then((res) => {
        res.json().then((data) =>{
            if(data.err) {
                console.log(data.error)
            }
            else{
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
});


