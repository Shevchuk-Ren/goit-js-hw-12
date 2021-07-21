const URL_BASE = `https://restcountries.eu/rest/v2/name`;

function fetchCountry(search) {
    const CHARACTERISTICS = 'fields=name;population;flag;languages;capital';
 
    return fetch(`${URL_BASE}/${search}?${CHARACTERISTICS}`).then(response => {
       
        if (response.ok) {
            return response.json(); 
        }
       resolve()
    })
}

export default { fetchCountry };