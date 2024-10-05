/*
 * google map api to show address locations which are clickable
 */
function initMap() {
    // map options
    var options = {
        zoom: 8,
        center: {
            lat: 52.205276,
            lng: 0.119167
        }
    }

    //  new map 
    var map = new google.maps.Map(document.getElementById('map'), options);

    // add marker function
    addMarker = (props) => {
        // add marker
        var marker = new google.maps.Marker({
            position: props.coords,
            map
        });
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }


    // cambridge coordinates
    addMarker({
        coords: {
            lat: 52.205276,
            lng: 0.119167
        },
        content: '<h1>Main branch:</h1> <p>Building 5, Cambridge lane Cambridge </p>'
    });
    // abuja coordinates
    addMarker({
        coords: {
            lat: 9.0765,
            lng: 7.3986
        },
        content: '<h1>Africa Main branch:</h1> <p>Aptech Avenue, building 7 Maintama </p>'
    });
    // london coordinates
    addMarker({
        coords: {
            lat: 51.5074,
            lng: 0.1278
        },
        content: '<h1>Abuja Address:</h1> <p>Cambridge hospital, opposite aptech centre London. </p>'
    });
    // bedford coordinates
    addMarker({
        coords: {
            lat: 52.1386,
            lng: 0.4668
        },
        content: '<h1>Bedford Address:</h1>  <p>Cambridge hospital, opposite aptech centre bedford. </p>'
    });
    // Kano coordinates
    addMarker({
        coords: {
            lat: 12.0022,
            lng: 8.5920
        },
        content: '<h1>Kano address: </h1> <small>No 365 maiduguri Rd. Kano </small>'
    });


}