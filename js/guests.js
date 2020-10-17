var allGuests;
var guests;

function guestList(guests,page) {
    var new_table = document.createElement("tbody");
    for (var i = (page - 1) * 10, guest; i < 10 * page; i++) {
        var row = new_table.insertRow();
        var id = row.insertCell(0);
        var name = row.insertCell(1);
        var lastname = row.insertCell(2);
        var email = row.insertCell(3);
        var phone = row.insertCell(4);
        if ((guest = guests[i])) {
            id.innerHTML = guest["id"];
            name.innerHTML = guest["firstName"];
            lastname.innerHTML = guest["lastName"];
            email.innerHTML = guest["emailAddress"];
            phone.innerHTML = guest["phoneNumber"];
        }else{
            row.className = "hidden";
            id.innerHTML = "<p>hidden</p>";
            name.innerHTML = "<p>hidden</p>";
            lastname.innerHTML = "<p>hidden</p>";
            email.innerHTML = "<p>hidden</p>";
            phone.innerHTML = "<p>hidden</p>";
        }
    }
    var old_table = document.getElementById("customer-table-body");
    new_table.id = "customer-table-body";
    old_table.parentNode.replaceChild(new_table, old_table);
}

function searchList(e){
    guests = [];
    var value = e.target.value.toString().toLowerCase();
    for(var i=0;guest = allGuests[i];i++){
        for(let key in guest){
            if(guest[key].toString().toLowerCase().includes(value)){
                guests.push(guest);
                break;
            }
        }
    }
    setupPagination();
}

function setupPagination() {
    var old_pagination = document.getElementById("pagination");
    var new_pagination = document.createElement("div");
    new_pagination.id = "pagination";
    var numOfPages = Math.ceil(guests.length / 10);
    for (var i = 0; i < numOfPages; i++) {
        var button = document.createElement("button");
        button.className = "page";
        button.value = i + 1;
        button.innerHTML = i + 1;
        button.onclick = function (event) {
            children = new_pagination.children;
            for (var i = 0; (element = children[i]); i++) {
                if (element == event.target) {
                    element.className = "page active";
                } else {
                    element.className = "page";
                }
            }
            guestList(guests,event.target.value);
        };
        new_pagination.appendChild(button);
    }
    if(numOfPages>0){
        new_pagination.children[0].className = "page active"
    }else{
        var button = document.createElement("button");
        button.className = "page active";
        button.innerHTML = 1;
        new_pagination.appendChild(button);
    }
    old_pagination.parentNode.replaceChild(new_pagination, old_pagination);
    guestList(guests,1);
}

function getGuests() {
    fetch("https://cors-anywhere.herokuapp.com/https://hostel-app-back-end-api.herokuapp.com/customers")
        .then((response) => response.text())
        .then((data) => {
            allGuests = JSON.parse(data);
            guests = allGuests;
            var input = document.getElementById("search");
            input.addEventListener("input",searchList);
            setupPagination();
        });
}

async function getGuestsAsync() {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://hostel-app-back-end-api.herokuapp.com/customers");
    const text = await response.text();
    allGuests = JSON.parse(text);
    guests = allGuests;
    var input = document.getElementById("search");
    input.addEventListener("input",searchList);
    setupPagination()
}

function clear(){
    allGuests = [];
    guests = [];
    setupPagination();
}

window.onload = getGuests();
