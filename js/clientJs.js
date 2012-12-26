var t = 0;
var started = false;

var interval = window.setInterval(function(){
    if(started){
        t += 1;
        if(t > 10){
            started = false;
            var answer = confirm ("10 seconds passed. The content is not loaded. Do you want to continue?")
            if (answer){
                started = true;
            }
            else
                started = false;
        }
        showTimeOut(t);
    }
    else {
        t = 0;
    }
}, 1000);

var loaded;
var timOut;

function showTimeOut(t){
    timOut.innerHTML = "Timeout: " + t + " seconds"
}

function getHTMLContent(url){
    if((url.trim() === "") || (url.indexOf("http://") === -1) || (url.replace("http://", "").trim() === "")) {
        alert("Insert a valid URL. It has start with \"http://\".");
        started = false;
        return;
    }

    url = url.trim();

    loaded = document.getElementById('loaded');
    loaded.style.background = "red";
    loaded.style.borderColor = "darkred";
    loaded.innerHTML = "<h1 class='contentText'>Loading the HTML of " + url + "<div id='timOut'></div></h1>"
    timOut = document.getElementById('timOut');
    started = true;

    $.ajax({
        url: url,
        type: 'GET',
        success: function(res) {
            var headline = res.responseText;
            if(headline === ""){
                loaded.innerHTML = "<h1 class='contentText'>There was a problem with the page. Be sure that your url is correct.</h1>";
                return;
            }
            
            htmlCodeTextArea.value = headline;
            loaded.style.background = "green";
            loaded.style.borderColor = "darkgreen";
            started = false;
            loaded.innerHTML = "<h1 class='contentText'>Successfully loaded HTML code of " + url + "</h1>";
        }
    });
}
