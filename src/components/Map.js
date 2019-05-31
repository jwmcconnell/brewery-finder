import Component from './Component.js';

class Map extends Component {
  render() {
    const dom = this.renderDOM();

    const breweries = this.props.breweries;

    let latlngbounds = new google.maps.LatLngBounds();

    let map = new google.maps.Map(dom.querySelector('.map'), {
      zoom: 8
    });

    breweries.forEach(brewery => {
      let marker = new google.maps.Marker({
        position: {
          lat: parseInt(brewery.latitude),
          lng: parseInt(brewery.longitude)
        },
        map: map,
        title: brewery.name,
        label: brewery.name
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