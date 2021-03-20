function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                { lat: -0.8827368, lng: 33.9363336 },
                { lat: -0.397068, lng: 34.1034177 },
                { lat: -0.4598754, lng: 33.9378805 },
                { lat: -0.7555027, lng: 34.5901537 },
                { lat: -0.6460521, lng: 34.2754988 },
                { lat: -0.6460521, lng: 34.2754988 },
                { lat: -0.121373, lng: 34.745178 },
                { lat: -0.117778, lng: 34.5230464 }
            ];

            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location,
                    lablel: labels[i % labels.length]
                });
            });

            var markerClusterer = new MarkerClusterer(map, markers, 
            {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",});
        }