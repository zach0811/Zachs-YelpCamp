// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
//     center: campground.geometry?.coordinates || [ -119.699375153073, 37.0743595873 ], // starting position [lng, lat]
//     zoom: 10 // starting zoom
// });

// new mapboxgl.Marker()
//     .setLngLat(campground.geometry?.coordinates || [ -119.699375153073, 37.0743595873 ])
//     .setPopup(
//         new mapboxgl.Popup({ offset: 25 })
//             .setHTML(
//                 `<h3>${campground.title}</h3><p>${campground.location}</p>`
//             )
//     )
//     .addTo(map)

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)