---
---

var ourMap = L.map('map').setView([0, 0], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2p1c3dpIiwiYSI6ImNrdnR3djhiaTMxYXMycm91ZTl0cTQ3NjEifQ.K6iJsG5RDE7rZFF8tzel9w'
}).addTo(ourMap);

var fellows = {{ site.data.fellows | jsonify}};

fellows.forEach((fellow) => {
    var markerIcon = L.icon({
        iconUrl: './assets/img/'+fellow.img,
        shadowUrl: './assets/img/shadow.png',
    
        iconSize:     [40, 40], // size of the icon
        shadowSize:   [25, 10], // size of the shadow
        iconAnchor:   [0, 40], // point of the icon which will correspond to marker's location
        shadowAnchor: [-15, 0],  // the same for the shadow
        popupAnchor: [20, -45], // point from which the popup should open relative to the iconAnchor
        className: 'marker'
    });

    var marker = L.marker([fellow.location.latitude, fellow.location.longitude], {icon: markerIcon}).addTo(ourMap);

    const card = `
      <div class="container">
        <h4><b>${fellow.name}</b></h4>
        ${fellow.location.name}<br/>
      </div>
      `
    marker.bindPopup(card);
})
