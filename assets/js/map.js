---
---

var ourMap = L.map('map').setView([0, 0], 1);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2p1c3dpIiwiYSI6ImNrdnR3djhiaTMxYXMycm91ZTl0cTQ3NjEifQ.K6iJsG5RDE7rZFF8tzel9w'
}).addTo(ourMap);

var fellows = {{ site.data.fellows | jsonify}};

fellows.forEach((fellow)=>{
    var marker = L.marker([fellow.location.latitude, fellow.location.longitude]).addTo(ourMap);

    const card = ` 
      <div class="container">
        <h4><b>${fellow.name}</b></h4>
        ${fellow.location.name}<br/>
      </div>
      `
    marker.bindPopup(card);
})
