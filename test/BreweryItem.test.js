import BreweryItem from '../src/components/BreweryItem.js';

const test = QUnit.test;

QUnit.module('BreweryItem');

test('Makes Brewery Item from template', assert => {
  const brewery = {
    'id': 5711,
    'name': 'Arlington Club',
    'brewery_type': 'micro',
    'street': '811 SW Salmon St',
    'city': 'Portland',
    'state': 'Oregon',
    'postal_code': '97205-3094',
    'country': 'United States',
    'longitude': '-122.681859641942',
    'latitude': '45.51786855',
    'phone': '5032234141',
    'website_url': 'http://www.thearlingtonclub.com',
    'updated_at': '2018-08-24T15:45:50.469Z',
    'tag_list': []
  };

  const breweryItem = new BreweryItem({ brewery, label: 'A' });
  const rendered = breweryItem.renderTemplate();

  assert.htmlEqual(rendered, /*html*/`
    <li>
      <h2>Arlington Club</h2>
      <section>
        <span>Type:</span>
        <span>micro</span>
      </section>
      <section>
        <span>City:</span>
        <span>Portland</span>
      </section>
      <section>
        <span>State:</span>
        <span>Oregon</span>
      </section>
      <section class=>
        <span>Address:</span>
        <span>811 SW Salmon St</span>
      </section>
      <a href="http://www.thearlingtonclub.com" class=>Website</a>
      <section class="map-label">
          <span>A</span>
        </section>
    </li>
  `);
}); 