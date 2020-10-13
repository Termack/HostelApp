function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}

function setupButtons(){
    var buttons = document.getElementsByClassName("changeStyle");
    for(var i=0;i<buttons.length;i++){
        var element = buttons[i];
        element.addEventListener("click",(e)=>{
            setCookie("Style",e.target.value,1);
            changeStyle(getCookie("Style"));
        });
    }
}

function changeStyle(path){
    var links = document.getElementsByTagName("link");
    for(var i=0;i<links.length;i++){
        var list = links[i].getAttribute("href").split("/");
        var file = list[list.length-1];
        var newHref = "/style/" + path + file;
        links[i].setAttribute("href",newHref);
    }
}

setupButtons();
changeStyle(getCookie("Style"));