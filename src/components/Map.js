import Component from './Component.js';

class Map extends Component {
  render() {
    const dom = this.renderDOM();

    var myLatLng = { lat: -25.363, lng: 131.044 };

    let map = new google.maps.Map(dom.querySelector('.map'), {
      center: myLatLng,
      zoom: 8
    });

    new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
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