import Component from './Component.js';

class Map extends Component {
  render() {
    const dom = this.renderDOM();

    const breweries = this.props.breweries;

    let latlngbounds = new google.maps.LatLngBounds();

    let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let labelIndex = 0;

    let map = new google.maps.Map(dom.querySelector('.map'), {
      zoom: 8
    });

    breweries.forEach(brewery => {
      let marker = new google.maps.Marker({
        position: {
          lat: parseFloat(brewery.latitude),
          lng: parseFloat(brewery.longitude)
        },
        label: labels[labelIndex++ % labels.length],
        map: map,
        title: brewery.name,
        gestureHandling: 'cooperative'
      });

      latlngbounds.extend(marker.position);
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