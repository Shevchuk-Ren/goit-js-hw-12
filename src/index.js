import './css/styles.css';
import countryItem from './templates/country-item.hbs';
import countryOption from './templates/country-option.hbs';
import API from './js/fetchCountries'
import getRefs from './js/get-refs'
const DEBOUNCE_DELAY = 300;

// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info')
// const input = document.getElementById('search-box');
// console.log(input)
const refs = getRefs();
refs.input.addEventListener('input', searchCountryForName);



// startRenderingCountry()
// console.log(`return promise`, startRenderingCountry())

function renderringCountryAfterSearch(country) {
    console.log(`omg`, country.length);
    if (country.length > 10) {
        return alert("Too many matches found. Please enter a more specific name.")
   }
    const markup = countryItem(country);
    const markupText = countryOption(country);
   
    refs.countryList.innerHTML = markup;
    refs.countryInfo.innerHTML = markupText;
}
function errorCountry(error) {
    console.log(`ошибка`, error)
    alert("Oops, there is no country with that name");
    
}

// function fetchCountry(search) {

//     console.log(`tadam`, search)
//     // if (!search) {
//     //     console.log('ddddh')
        
//     //     return
//     // }
//     return fetch(`https://restcountries.eu/rest/v2/name/${search}`).then(response => {
//         console.log(response)
//         if (response.ok) {
//             return response.json(); 
//         }
//        resolve()
//     })
// }


// fetchCountry().then(renderringCountryAfterSearch);

function searchCountryForName(evt) {
    if (!evt.currentTarget.value) {
        console.log('end')
       refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
        return
        
    }
    const currentSearch = evt.currentTarget.value;
   
  

    API.fetchCountry(currentSearch).then(renderringCountryAfterSearch).catch(errorCountry);


}
