function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location = document.querySelector("#location").value;
    if (location==""){
        location = "Ann Arbor";
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    if (document.querySelector("#celcius").checked) {
        format = "metric"; 
    }
    else {
        format = "imperial"

    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=9b946b98b1bda093b69ec5c57cdc9785&units="+format;
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.
    let forecast = document.querySelector("#forecast");


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json);
        loc.innerHTML = json.name;
        temp.innerHTML = json.main.temp + " with " + json.weather[0].description;
        tempImg.src = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png" ;
        tempImg.alt = json.weather[0].description;
        tempImg.title = json.weather[0].description;
        forecast.style.display='block';
    });
}
