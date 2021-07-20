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

// const fetchCountries = fetch('https://restcountries.eu/rest/v2/name/Col').then(response => {
//     // console.log(response.json());
//     return response.json();
// }).then(country => {
//     console.log(country);
//     const markup = countryItem(country);
//     countryList.insertAdjacentHTML('beforeend', markup)
//     console.log(markup)
// }).catch();
function startRenderingCountry() {
    // console.log(searchCountryForName())
    const a = 'col';
    console.log(a)
    const fetchCountries = fetch(`https://restcountries.eu/rest/v2/name/${a}`).then(response => {
        console.log(fetchCountries);
        return response.json();
    }).then(country => {
        console.log(`rer`, country);
        const markup = countryItem(country);
        const markupText = countryOption(country);
        countryList.insertAdjacentHTML('beforeend', markup)
        countryInfo.insertAdjacentHTML('beforeend', markupText)
        console.log()
    }).catch();
}
startRenderingCountry()
function accessCountry() {

}

function searchCountryForName(evt) {
    if (evt.currentTarget.value.trim('') === '') {
        console.log('h')
        return
    }
    const currentSearch = evt.currentTarget.value;
    console.log(`hh`, currentSearch.trim(''))
    return currentSearch;
}
// console.log(`dd`, currentSearch())