import Component from './Component.js';

class Map extends Component {
  render() {
    const dom = this.renderDOM();

    const breweries = this.props.breweries;

    var myLatLng = { lat: -25.363, lng: 131.044 };

    let map = new google.maps.Map(dom.querySelector('.map'), {
      center: myLatLng,
      zoom: 8
    });

    breweries.forEach(brewery => {
      new google.maps.Marker({
        position: {
          lat: parseInt(brewery.latitude),
          lng: parseInt(brewery.longitude)
        },
        map: map,
        title: brewery.name,
        label: brewery.name
      });
    });

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