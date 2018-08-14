import React, {Component} from 'react';
import DeckGL, {PolygonLayer} from 'deck.gl';
import TripsLayer from './trips-layer';

const LIGHT_SETTINGS = {
  lightsPosition: [-74.05, 40.7, 8000, -73.5, 41, 5000],
  ambientRatio: 0.05,
  diffuseRatio: 0.6,
  specularRatio: 0.8,
  lightsStrength: [2.0, 0.0, 0.0, 0.0],
  numberOfLights: 2
};

export default class DeckGLOverlay extends Component {
  static get defaultViewport() {
    return {
	  longitude: -122.335252,
	  latitude: 47.606021,
	  zoom: 14,
      maxZoom: 18,
      pitch: 45,
      bearing: 0
    };
  }

	// longitude: -74,
	// latitude: 40.72,
	// longitude: -122.335252,
	// latitude: 47.606021,

	render() {
    const {viewport, buildings, trips, trailLength, time} = this.props;

    if (!buildings || !trips) {
      return null;
    }

    const layers = [
      new TripsLayer({
        id: 'trips',
        data: trips,
        getPath: d => d.segments,
        getColor: d => (d.vendor === 0 ? [255, 0, 0]: d.vendor === 1?  [255, 245, 0]:[14, 255, 14] ),
        opacity: 1,
        strokeWidth: 5,
        trailLength,
        currentTime: time
      }),
      new PolygonLayer({
        id: 'buildings',
        data: buildings,
        extruded: true,
        wireframe: false,
        fp64: true,
        opacity: 0.5,
        getPolygon: f => f.polygon,
        getElevation: f => f.height,
        getFillColor: f => [74, 80, 87],
        lightSettings: LIGHT_SETTINGS
      })
    ];

    return <DeckGL {...viewport} layers={layers} />;
  }
}
