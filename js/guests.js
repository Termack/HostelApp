
function getGuests(){
    fetch("/customer.html")
    .then(response => {
        console.log(response);
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => 
        console.log(error)
    );
}

window.onload = getGuests();