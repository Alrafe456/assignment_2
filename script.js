// script.js

const countryInput = document.getElementById('country-input');
const searchButton = document.getElementById('search-button');
const countryGrid = document.getElementById('country-grid');

searchButton.addEventListener('click', async () => {
    const countryName = countryInput.value;
    const countryData = await fetchCountryData(countryName);
    displayCountries(countryData);
});

async function fetchCountryData(countryName) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    return data;
}

function displayCountries(countries) {
    countryGrid.innerHTML = '';
    countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card';
        countryCard.innerHTML = `
            <h3>${country.name.common}</h3>
            <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
            <p>Population: ${country.population}</p>
            <p>Capital: ${country.capital}</p>
            <button onclick="showMoreDetails('${country.name.common}')">More Details</button>
        `;
        countryGrid.appendChild(countryCard);
    });
}

function showMoreDetails(countryName) {
    // Fetch and display more details about the country
    alert(`Showing more details for ${countryName}`);
}