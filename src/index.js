import './css/styles.css';
import countryItem from './templates/country-item.hbs';
import countryOption from './templates/country-option.hbs';
// import country from './js/fetchCountries'

const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info')
const input = document.getElementById('search-box');
console.log(input)

input.addEventListener('input', searchCountryForName);



// startRenderingCountry()
// console.log(`return promise`, startRenderingCountry())

function renderringCountryAfterSearch(country) {
    console.log(`rer`, country);

    const markup = countryItem(country);
    const markupText = countryOption(country);
   
    countryList.innerHTML = markup;
    countryInfo.innerHTML = markupText;
}
function errorCountry(error) {
    console.log(error)
}

function fetchCountry(search) {

    console.log(`tadam`, search)
    if (!search) {
        console.log('ddddh')
        
        return
    }
    return fetch(`https://restcountries.eu/rest/v2/name/${search}`).then(response => {

        return response.json();
    })
}


console.log(`return promise`, fetchCountry())
// fetchCountry().then(renderringCountryAfterSearch);

function searchCountryForName(evt) {
    if (!evt.currentTarget.value) {
        console.log('end')
       countryList.innerHTML = '';
    countryInfo.innerHTML = '';
        return
        
    }
    const currentSearch = evt.currentTarget.value;

    fetchCountry(currentSearch).then(renderringCountryAfterSearch);


}
