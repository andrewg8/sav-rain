$(document).ready(function() {

    function weather() {
        var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=32.08&lon=-81.09'

        $.getJSON(URL, function(data){
            console.log(data)
        }).done(function(data){
            if (data.weather[0].main == "Rain") {
                $('#desc').html("yes :(")

            } else {
                $('#desc').html("no :)")
                }
            }
        );
    }
    weather();
});