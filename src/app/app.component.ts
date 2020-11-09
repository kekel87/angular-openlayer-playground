import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { XYZ, Vector as VectorSource } from 'ol/source';
import { Style, Fill, Stroke, Circle } from 'ol/style';
import { GeoJSON } from 'ol/format';
import { click, singleClick } from 'ol/events/condition';
import Select from 'ol/interaction/Select';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  map: Map;
  vectorSource: VectorSource = new VectorSource();
  
  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({ url: 'https://{a-c}.tile.osm.org/{z}/{x}/{y}.png' })
        }),
        new VectorLayer({
          url: 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson',
          format: new GeoJSON()
        })
      ],
      view: new View({
        center: [288626, 5885039],
        zoom: 5
      })
    });
  }
}
