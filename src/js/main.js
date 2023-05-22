let country = getCountryByNavigatorLanguage().data;
let request = {
    baseUrl: "https://timeapi.io/api/",
    availableTimeZones: "AvailableTimeZones",
    timeZone: "Time/current/zone?timeZone=" + country
};

function fillSelectCountry() {
    let countries = Object.values(COUNTRY_TAG);
    let countriesTag = Object.keys(COUNTRY_TAG);
    let nCountries = countries.length;

    for(let i = 0; i < nCountries; i++) {
        $("#availableTimezone").append('<option value="' + countriesTag[i] +'">' + countries[i] + '</option>');
    }
}

function setClock() {
    $.ajax({
        url: request.baseUrl + request.timeZone,
        method: "GET",
        type: "GET",
        success: function(response) {
            $("#hour").html(response.hour);
            $("#minutes").html(response.minute);
            $("#year").html(response.year);
            $("#month").html(response.month);
            $("#day").html(response.day);
        },
    });
}

$("document").ready(function(handler) {
    fillSelectCountry();
    $("#availableTimezone").on('change', function(event) {
        country = $("#availableTimezone").val();
        setClock();
    });
    setClock();
    
});        