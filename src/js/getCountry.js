/**
 * @description Gets country name by user navigator language
 * @param String || undefined countryTag if set then returns country name by this param
 * @returns Object response{
 * data: String
 * error: bool,
 * message: String
 * @author https://github.com/solvingIssues
 * @version 1.0
 * }
 */
/**
 * @description Gets country name by user navigator language
 * @param String || undefined countryTag if set then returns country name by this param
 * @returns Object response{
 * data: String
 * error: bool,
 * message: String
 * @author https://github.com/solvingIssues
 * @version 1.0
 * }
 */
function getCountryByNavigatorLanguage(countryTag) {
  let response = {
      data : "",
      error: false,
      message: ""
  }
  let currentTimeZone =
  navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  let currentTimeZoneLength = currentTimeZone.length;
  //Get last 2 chars of navigator language
  currentTimeZone= currentTimeZone.slice(currentTimeZone.Length - 2, currentTimeZone.length).toUpperCase();
  
  if(typeof(countryTag) != "undefined") {
      countryTag = typeof(countryTag) == "string" ? countryTag.toUpperCase() : "";
      if(typeof(COUNTRY_TAG[countryTag]) == "undefined") {
          response.error = true;
          response.message = "An error ocurred getting country by country tag.";    
      } else {
          response.data = COUNTRY_TAG[countryTag];
      }

  } else if(typeof(COUNTRY_TAG[currentTimeZone]) == "undefined") {
      response.error = true;
      response.message = "An error ocurred getting country by navivator language.";
  } else {
      response.data = COUNTRY_TAG[currentTimeZone];
  }
  return response;
}
