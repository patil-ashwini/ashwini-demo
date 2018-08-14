/* global document, fetch, window */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';
import Header from './info-panel.js';
// import ViewportAnimation from './map-utils.js';
import TimerMixin from 'react-timer-mixin';

// Set your mapbox token here
const MAPBOX_TOKEN = process.env.MapboxAccessToken || 'pk.eyJ1IjoiYXNod2luaXBhdGlsIiwiYSI6ImNqaGZsdGw0dTE5YmszZHM2bWN2c2tnNjcifQ.IyX60Zqqj3RtefmomBBnMA'; // eslint-disable-line

// Source data CSV
const DATA_URL = {
	BUILDINGS:
		'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line
	TRIPS:
		'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/trips.json', // eslint-disable-line
	TIMESTAMPDATA:
		'http://localhost:3000/results',
	LATLONGDATA:
		'http://localhost:3000/locations'
};
var count = 0;
var loopCount = 575; // 575 records - 1400 mins in a day
// with 2.5 minutes for a day so 191 is 465 minutes in  day

class Root extends Component {

	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				...DeckGLOverlay.defaultViewport,
				width: 500,
				height: 500
			},
			buildings: null,
			trips: null,
			time: 0
		};
		fetch(DATA_URL.BUILDINGS)
			.then(resp => resp.json())
			.then(data => this.setState({buildings: data}));

		fetch(DATA_URL.TRIPS)
			.then(resp => resp.json())
			.then(data =>{});

		// fetch(DATA_URL.TIMESTAMPDATA)
		fetch(DATA_URL.TIMESTAMPDATA)
			.then(resp => resp.json())
			.then(data => {
				var timeStampData = data;
				var timeStampLookUp = {} // to use for  looking up what speed needs to be displayed
				for(var i = 0 ;i <timeStampData.length;i++){
					var currentSection = timeStampData[i].Section;
					timeStampLookUp[timeStampData[i].Section] = {sequence:[]};
					var newArray = timeStampData.filter(function (el) {
						return el.Section == currentSection ; // Changed this so a home would match
					});

					timeStampLookUp[timeStampData[i].Section].sequence = newArray
					timeStampLookUp[timeStampData[i].Section].section = timeStampData[i].Section
					timeStampLookUp[timeStampData[i].Section].sequenceLength = newArray.length
				}
				fetch(DATA_URL.LATLONGDATA)
					.then(resp => resp.json())
					.then(data => {
						var mainArray = [];
						for(var a = 0 ; a< data.length; a++){
								var newTimeStamp = 0; var previousTimeStamp = 0 ;
								for(var j = 0 ; j< loopCount; j++){
									var obj = {};
									obj.segments = [];
									obj.section = data[a].section
									var jArrayStart = []
									var jArrayEnd = []
									var segments = [];
									newTimeStamp = previousTimeStamp;

									// var startTime = timeStampLookUp[obj.section].sequence[count]['Time']
									// startTime =  Date.parse(startTime);
									// startTime = Math.round((startTime).getTime() / 1000);
									// var endTime = timeStampLookUp[obj.section].sequence[count+1]['Time']
									// endTime =  Date.parse(endTime);
									// endTime = Math.round((endTime).getTime() / 1000);
									// console.log("startTime", startTime);
									// console.log("endTime", endTime)

									jArrayStart = [data[a].lonbegin, data[a].latbegin, newTimeStamp]; // second point with an increment of 50 as the timestamp
									jArrayEnd = [data[a].lonend, data[a].latend, newTimeStamp = newTimeStamp+150]; // second point with an increment of 50 as the timestamp
									previousTimeStamp = newTimeStamp;
									segments.push(jArrayStart, jArrayEnd );
									obj.segments = segments
									obj.segmentLength = obj.segments.length;

									if(obj.section  ===  timeStampLookUp[obj.section].section){
										if(count < timeStampLookUp[obj.section].sequence.length){
											var speed = timeStampLookUp[obj.section].sequence[count]['Speed mph'];
											if(speed <= 40 ){
												obj.vendor =  0; // congested
											}else if(speed < 43){
												obj.vendor = 1; // free flowing
											}else if(speed > 43){
												obj.vendor = 2;
											}
										}else{
											count = 0;
										}
									}
									count++;
									mainArray.push(obj);
								}
						}
						this.setState({trips: mainArray, timeStampData, timeStampLookUp})
					});
			});
	}

	componentDidMount() {
		window.addEventListener('resize', this._resize.bind(this));
		console.log("animate called in compDidMount")
		this._resize();
		this._animate();

	}

	componentWillUnmount() {
		if (this._animationFrame) {
			console.log("animation about to cancel")
			window.cancelAnimationFrame(this._animationFrame);
		}
		console.log("animation cancelled")
	}

	_animate(){
		var lookup;
		if(this.state.timeStampLookUp != undefined){
			lookup = this.state.timeStampLookUp;
			var startAt = lookup[4].sequence[0]['Time'];
			var length = lookup[4].sequence.length;
			var last = lookup[4].sequence[length-1]['Time'];
		}
		const timestamp = Date.now();
		const loopLength = 10000; // was 1800 changed this to 1000  so that the light is lit faster
		const loopTime = 80000; // ash - the number of times a loop keeps animating in a section
		this.setState({
			time: (timestamp % loopTime) / loopTime * loopLength,
		});
		this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));


		// for(var i = 0 ; i< length; i++){
		// 	var currentTime = lookup[4].sequence[i]['Time'];
		// 	this.setState({currentTime})
		// }

	}

	_resize() {
		this._onViewportChange({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	_onViewportChange(viewport) {
		this.setState({
			viewport: {...this.state.viewport, ...viewport}
		});
	}
	// 'mapbox://styles/mapbox/streets-v9'
	render() {
		const {viewport, buildings, trips, time} = this.state;
		return (
			<MapGL
				{...viewport}
				mapStyle="mapbox://styles/mapbox/dark-v9"
				onViewportChange={this._onViewportChange.bind(this)}
				mapboxApiAccessToken={MAPBOX_TOKEN}>
				<Header
					isMenuOpen={true}
					time={this.state.time}
					currentTime={this.state.currentTime}
					timeStampLookUp={this.state.timeStampLookUp}
					trips={trips}
					toggleMenu={true}/>
				<DeckGLOverlay
					viewport={viewport}
					buildings={buildings}
					trips={trips}
					trailLength={180}
					time={time}
				/>
			</MapGL>
		);
	}
}

render(<Root/>, document.body.appendChild(document.createElement('div')));
