
import Component from './Component.js';

function geocodeAddress(geocoder, resultsMap, brewery, labels, labelIndex, latlngbounds) {
  var address = `${brewery.street}, ${brewery.city}, ${brewery.state}`;

  geocoder.geocode({ 'address': address }, function(results, status) {
    if(status === 'OK') {
      // resultsMap.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        label: labels[labelIndex % labels.length]
      });
      latlngbounds.extend({ lat: marker.getPosition().lat(), lng: marker.getPosition().lng() });
      resultsMap.setCenter(latlngbounds.getCenter());
      resultsMap.fitBounds(latlngbounds);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

class Map extends Component {
  render() {
    const dom = this.renderDOM();

    const breweries = this.props.breweries;

    let latlngbounds = new google.maps.LatLngBounds();

    let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let labelIndex = 0;

    let map = new google.maps.Map(dom.querySelector('.map'));

    breweries.forEach(brewery => {
      brewery.latitude = parseFloat(brewery.latitude);
      brewery.longitude = parseFloat(brewery.longitude);
      var geocoder = new google.maps.Geocoder();

      if(brewery.latitude && brewery.longitude) {

        let marker = new google.maps.Marker({
          position: {
            lat: parseFloat(brewery.latitude),
            lng: parseFloat(brewery.longitude)
          },
          label: labels[labelIndex % labels.length],
          map: map,
          title: brewery.name,
          gestureHandling: 'cooperative'
        });

        latlngbounds.extend(marker.position);

      } else if(brewery.street) {
        geocodeAddress(geocoder, map, brewery, labels, labelIndex, latlngbounds);
      }
      labelIndex++;
    });

    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds);

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
    <div class="map-container">
      <div class="map"></div>
    </div>
    `;
  }
}

export default Map;