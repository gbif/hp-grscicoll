function updateUserCountry() {
  // Make an HTTP GET request to the API endpoint
  fetch('{{ site.webApi }}/unstable-api/user-info?lang=' + pageLang)
    .then(response => response.json())
    .then(data => {
      if (data.country && data.countryName) {
        // Update the country name
        document.getElementById('users-country-name').textContent = data.countryName;

        // Replace the link with the country code
        const countryLink = document.getElementById('users-country-conditional');
        countryLink.href = countryLink.href.replace('{USER_COUNTRY}', data.country);

        // Remove the 'hidden' class
        countryLink.classList.remove('hidden');
      }
    })
    .catch(error => {
      console.error('Error fetching user country: ', error);
    });
}
const countryLink = document.getElementById('users-country-conditional');
if (countryLink) updateUserCountry();