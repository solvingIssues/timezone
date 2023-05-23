let clock = {

    time:{
        hours:"",
        minutes: "",
        seconds: "",
        year: "",
        month: "",
        day: ""
    },
    timmer: function() {

    },
  country : getCountryByNavigatorLanguage().data,
  

getCountryTime: function (countryTag) {
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
    let finalData = {
        day : res.slice(0, res.indexOf("/")),
        month : res.slice(res.indexOf("/") + 1, res.lastIndexOf("/")),
        year : res.slice(res.indexOf(",") - 4, res.indexOf(",")),
        hours : res.slice(res.indexOf(":") - 2, res.indexOf(":")),
        minutes : res.slice(res.lastIndexOf(":") - 2, res.lastIndexOf(":"))
    }
    return finalData;
},

fillSelectCountry: function() {
    let countries = Object.values(COUNTRY_TAG);
    let countriesTag = Object.keys(COUNTRY_TAG);
    let nCountries = countries.length;

    for(let i = 0; i < nCountries; i++) {
        $(".availableTimezone").append('<option value="' + countriesTag[i] +'">' + countries[i] + '</option>');
    }
},

    setClock: function (el, tag) {
        let currentTimeZone =
    navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
        let countryTag = typeof(tag) == "undefined" ? currentTimeZone.slice(currentTimeZone.length - 2, currentTimeZone.length).toUpperCase() : tag;
        let time = clock.getCountryTime(countryTag);
        if(typeof(el) == "undefined") {
            $(".hour").html(time.hours);
            $(".minutes").html(time.minutes);
            $(".year").html(time.year);
            $(".month").html(time.month);
            $(".day").html(time.data);
        } else {
            el.find(".hour").html(time.hours);
            el.find(".minutes").html(time.minutes);
            el.find(".year").html(time.year);
            el.find(".month").html(time.month);
            el.find(".day").html(time.data);
        }
    },
    buttonsEvents: {

    },
    setEvents: function(id) {
        
        $("#" + id).find(".new-clock").on('click', function(e) {
            e.preventDefault();
            let el = $(this).closest(".timezone");
            let elementId = "timezone" + $(".timezone").length;
            el.clone().appendTo("body");
            $("body").children(".timezone").last().attr("id", elementId);
            $("#" + elementId).draggable();
            clock.setEvents(elementId);
        });

        $("#" + id).find(".availableTimezone").on('change', function(e) {
            let aux = $(this).val();
            country = getCountryByNavigatorLanguage(aux).data;
            clock.setClock($(this).closest(".timezone"),aux);
        }); 
    }
}


$("document").ready(function(handler) {
    clock.fillSelectCountry();
    $( "#timezone" ).draggable();         
    $(".availableTimezone").on('change', function(event) {
        let aux = $(this).val();
        country = getCountryByNavigatorLanguage(aux).data;
        clock.setClock($(this).closest(".timezone"),aux);
    });    
    clock.setClock();
    $("#timezone").find(".new-clock").on('click', function(event) {
        event.preventDefault();
        let el = $(this).closest(".timezone");
        let elementId = "timezone" + $(".timezone").length;
        el.clone().appendTo("body");
        $("body").children(".timezone").last().attr("id", elementId);
        $("#" + elementId).draggable();
        clock.setEvents(elementId);
    });
});