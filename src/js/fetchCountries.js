const URL_BASE = `https://restcountries.eu/rest/v2/name`;

function fetchCountry(search) {

    console.log(`tadam`, search)
 
    return fetch(`${URL_BASE}/${search}`).then(response => {
        console.log(response)
        if (response.ok) {
            return response.json(); 
        }
       resolve()
    })
}

export default { fetchCountry };