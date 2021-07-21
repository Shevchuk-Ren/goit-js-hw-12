import './css/styles.css';
import countryItem from './templates/country-item.hbs';
import countryOption from './templates/country-option.hbs';
import API from './js/fetchCountries'
import getRefs from './js/get-refs'
import Notiflix from "notiflix";

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

const debounce = require('lodash.debounce');


refs.input.addEventListener('input', debounce(searchCountryForName, DEBOUNCE_DELAY));

 //отрисовка если операция успешна
function renderringCountryAfterSearch(country) {

    const markup = countryItem(country);
    const markupCard = countryOption(country);
    
    if (country.length > 10) {
         return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (country.length === 1) {
        visualMarkup('', markupCard)
        return;
    } else {
        visualMarkup(markup, '')
   }
}

//промис при ошибке
function errorCountry(error) {
    return Notiflix.Notify.failure('Oops, there is no country with that name.');
}

//при работе с инпутом
function searchCountryForName(evt) {
    if (!evt.target.value) {
        clearSearch();
        return;
        
    }
    const currentSearch = evt.target.value;
    API.fetchCountry(currentSearch).then(renderringCountryAfterSearch).catch(errorCountry);
}

function visualMarkup(markup, description) {
    
   
    if (markup) {
      refs.countryList.innerHTML = markup;
      refs.countryInfo.innerHTML = '';
        return;
    }
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = description;
}

function clearSearch() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
}


// import './css/styles.css';
// import countryItem from './templates/country-item.hbs';
// import countryOption from './templates/country-option.hbs';
// import API from './js/fetchCountries'
// import getRefs from './js/get-refs'
// import Notiflix from "notiflix";

// const DEBOUNCE_DELAY = 300;
// const refs = getRefs();

// const debounce = require('lodash.debounce');




// class Search {
//    constructor({ renderMarkup, clearRender}) {
//         this.renderMarkup = renderMarkup;
//         this.clearRender = clearRender;
        
//    }
    
//   //при работе с инпутом
// searchCountryForName(evt) {
//     if (!evt.target.value) {
//         console.log(`f`,clearRender())
//         this.clearRender();
//         return;
        
//     }
//     const currentSearch = evt.target.value;
//     API.fetchCountry(currentSearch).then(search.renderringCountryAfterSearch).catch(search.errorCountry);
//  }
    
// renderringCountryAfterSearch(country) {
//     console.log(`country`, country)
//     const markup = countryItem(country);
//     const markupCard = countryOption(country);

//     if (country.length > 10) {
//          return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//     } else if (country.length === 1) {
//         this.renderMarkup('', markupCard)
//         return;
//     } else {
//          console.log(`mark`, renderMarkup())
//         this.renderMarkup(markup, '')
//    }
//     }
// errorCountry(error) {
//     return Notiflix.Notify.failure('Oops, there is no country with that name.');
// }
// }

// const search = new Search({ renderMarkup: visualMarkup, clearRender: clearSearch })
// refs.input.addEventListener('input', debounce(search.searchCountryForName, DEBOUNCE_DELAY));
//  //отрисовка если операция успешна
// // function renderringCountryAfterSearch(country) {

// //     const markup = countryItem(country);
// //     const markupCard = countryOption(country);

// //     if (country.length > 10) {
// //          return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
// //     } else if (country.length === 1) {
// //         visualMarkup('', markupCard)
// //         return;
// //     } else {
// //         visualMarkup(markup, '')
// //    }
// // }

// //промис при ошибке
// // function errorCountry(error) {
// //     return Notiflix.Notify.failure('Oops, there is no country with that name.');
// // }

// // //при работе с инпутом
// // function searchCountryForName(evt) {
// //     if (!evt.target.value) {
// //         clearSearch();
// //         return;
        
// //     }
// //     const currentSearch = evt.target.value;
// //     API.fetchCountry(currentSearch).then(renderringCountryAfterSearch).catch(errorCountry);
// // }

// function visualMarkup(markup, description) {
//     console.log(`marker`, markup)
//    console.log('ppppppp')
//     if (markup) {
//         console.log(`refs`,refs.countryList)
//       refs.countryList.innerHTML = markup;
//       refs.countryInfo.innerHTML = '';
//         return;
//     }
//     console.log(`refsom`,refs.countryList)
//     refs.countryList.innerHTML = '';
//     refs.countryInfo.innerHTML = description;
// }

// function clearSearch() {
//     refs.countryList.innerHTML = '';
//     refs.countryInfo.innerHTML = '';
//     return;
// }