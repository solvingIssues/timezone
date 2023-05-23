let country = getCountryByNavigatorLanguage().data;

function getCountryTime(countryTag) {
    let options = {
        timeZone: COUNTRY_TIMEZONE[COUNTRY_TAG[countryTag]],
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      formatter = new Intl.DateTimeFormat([], options);

    let res = formatter.format(new Date());
    let len = res.length;
    let finalData = {
        day : res.slice(0, res.indexOf("/")),
        month : res.slice(res.indexOf("/") + 1, res.lastIndexOf("/")),
        year : res.slice(res.indexOf(",") - 4, res.indexOf(",")),
        hours : res.slice(res.indexOf(":") - 2, res.indexOf(":")),
        minutes : res.slice(res.lastIndexOf(":") - 2, res.lastIndexOf(":"))
    }
    return finalData;
}

function fillSelectCountry() {
    let countries = Object.values(COUNTRY_TAG);
    let countriesTag = Object.keys(COUNTRY_TAG);
    let nCountries = countries.length;

    for(let i = 0; i < nCountries; i++) {
        $("#availableTimezone").append('<option value="' + countriesTag[i] +'">' + countries[i] + '</option>');
    }
}

function setClock(tag) {
    let currentTimeZone =
  navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
    let countryTag = typeof(tag) == "undefined" ? currentTimeZone.slice(currentTimeZone.length - 2, currentTimeZone.length).toUpperCase() : tag;
    let time = getCountryTime(countryTag);
    $("#hour").html(time.hours);
    $("#minutes").html(time.minutes);
    $("#year").html(time.year);
    $("#month").html(time.month);
    $("#day").html(time.data);
}
  

$("document").ready(function(handler) {
    fillSelectCountry();
    $("#availableTimezone").on('change', function(event) {
        let aux = $("#availableTimezone").val();
        country = getCountryByNavigatorLanguage(aux).data;
        setClock(aux);
    });
    setClock();
    
});    