import './css/styles.css';
import countryItem from './templates/country-item.hbs';
import countryOption from './templates/country-option.hbs';
import API from './js/fetchCountries'
import getRefs from './js/get-refs'
import Notiflix from "notiflix";


const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener('input', searchCountryForName);

 //отрисовка если операция успешна
function renderringCountryAfterSearch(country) {

    const markup = countryItem(country);
     const markupText = countryOption(country);

    console.log(`omg`, country.length);
    if (country.length > 10) {
         return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (country.length === 1) {
        // const markupText = countryOption(country);
        refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = markupText;
        return;
    } else {
        //  const markup = countryItem(country);
    // const markupText = countryOption(country);
   
    refs.countryList.innerHTML = markup;
    refs.countryInfo.innerHTML = '';
   }
    // const markup = countryItem(country);
    // const markupText = countryOption(country);
   
    refs.countryList.innerHTML = markup;
    refs.countryInfo.innerHTML = '';
    // refs.countryInfo.innerHTML = markupText;
}
//ошибка
function errorCountry(error) {
    console.log(`ошибка`, error)
    
    return Notiflix.Notify.failure('Oops, there is no country with that name.');
}

//действие с инпутом
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

