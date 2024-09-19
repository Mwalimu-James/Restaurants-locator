const x = document.getElementById("demo");

function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by current browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // Show the coordinates in the #demo element
    x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lng;

    // Initialize the map with the user's coordinates
    initMap(lat, lng);
}

function initMap(lat, lng) {
    // Create a LatLng object from the user's coordinates
    const userLocation = { lat: lat, lng: lng };

    // Initialize the Google Map centered on the user's location
    const map = new google.maps.Map(document.getElementById('map'), {
        center: userLocation,
        zoom: 12
    });

    // Optional: Add a marker to show the user's location
    new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your location"
    });
}
