import './css/styles.css';
import countryItem from './templates/country-item.hbs';
import countryOption from './templates/country-option.hbs';
import API from './js/fetchCountries'
import getRefs from './js/get-refs'


const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener('input', searchCountryForName);

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

