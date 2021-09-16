let lastTime = document.querySelectorAll(".last"),
currentTime = document.querySelectorAll(".hrs-current")


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:

const toggleButton = (x) => {
    if(x == 1){
        
    }
}

const changeTimeSpan = (x) => {
    if(x == 1){
        readTextFile("data.json", (text) =>{
            let data = JSON.parse(text);
            lastTime.forEach(function(a, index ) {
                a.textContent =  data[index].timeframes.daily.previous+"hrs";
    
            });
            currentTime.forEach(function(a, index ) {
                a.textContent =  data[index].timeframes.daily.current+"hrs";
    
            });
        });
    }else if(x == 2){
        readTextFile("data.json", (text) =>{
            let data = JSON.parse(text);
            lastTime.forEach(function(a, index ) {
                a.textContent =  data[index].timeframes.weekly.previous+"hrs";
    
            });
            currentTime.forEach(function(a, index ) {
                a.textContent =  data[index].timeframes.weekly.current+"hrs";
    
            });
        });
    }else{
        readTextFile("data.json", (text) =>{
            let data = JSON.parse(text);
            lastTime.forEach(function(a, index ) {
                a.textContent =  data[index].timeframes.monthly.previous+"hrs";
    
            });
            currentTime.forEach(function(a, index ) {
                a.textContent =  data[index].timeframes.monthly.current+"Hrs";
    
            });
        });
    }


}


changeTimeSpan(3)
