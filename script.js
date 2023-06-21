window.addEventListener('DOMContentLoaded', () => {
    // Fetch the user's IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            
            // Fetch the country based on IP address
            fetch(`https://api.ipgeolocationapi.com/geolocate/${ipAddress}`)
                .then(response => response.json())
                .then(data => {
                    const country = data.country_name;
                    console.log(`Detected country: ${country}`);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
