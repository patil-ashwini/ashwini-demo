import React, {Component} from 'react';
import {render} from 'react-dom';
import Loading from "./timer";

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
export default class InfoPanel extends Component {

	initializeState(){
			fetch(DATA_URL.TIMESTAMPDATA)
				.then(resp => resp.json())
				.then(data => {
					var timeStampLookUp = {} // to use for  looking up what speed needs to be displayed
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
					this.setState({timeStampLookUp})
					console.log("this.state", this.state)

				});

		}

	constructor(props) {
		super(props);

		this.state = {
			seconds: "",
			count:0,
			time:[
				{
					"Time": "3/16/18 12:02 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 12:05 AM",
					"Section": 4,
					"Speed mph": 30.3
				},
				{
					"Time": "3/16/18 12:07 AM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 12:10 AM",
					"Section": 4,
					"Speed mph": 42.3
				},
				{
					"Time": "3/16/18 12:12 AM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 12:15 AM",
					"Section": 4,
					"Speed mph": 44.1
				},
				{
					"Time": "3/16/18 12:17 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 12:20 AM",
					"Section": 4,
					"Speed mph": 42.3
				},
				{
					"Time": "3/16/18 12:22 AM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 12:25 AM",
					"Section": 4,
					"Speed mph": 44.1
				},
				{
					"Time": "3/16/18 12:27 AM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 12:30 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 12:32 AM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 12:35 AM",
					"Section": 4,
					"Speed mph": 46.8
				},
				{
					"Time": "3/16/18 12:37 AM",
					"Section": 4,
					"Speed mph": 47.4
				},
				{
					"Time": "3/16/18 12:40 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 12:42 AM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 12:45 AM",
					"Section": 4,
					"Speed mph": 43.9
				},
				{
					"Time": "3/16/18 12:47 AM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 12:50 AM",
					"Section": 4,
					"Speed mph": 46.6
				},
				{
					"Time": "3/16/18 12:52 AM",
					"Section": 4,
					"Speed mph": 45.5
				},
				{
					"Time": "3/16/18 12:55 AM",
					"Section": 4,
					"Speed mph": 46.1
				},
				{
					"Time": "3/16/18 12:57 AM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 1:00 AM",
					"Section": 4,
					"Speed mph": 47.5
				},
				{
					"Time": "3/16/18 1:02 AM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 1:05 AM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 1:07 AM",
					"Section": 4,
					"Speed mph": 47
				},
				{
					"Time": "3/16/18 1:10 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 1:12 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 1:15 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 1:17 AM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 1:20 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 1:22 AM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 1:25 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 1:27 AM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 1:30 AM",
					"Section": 4,
					"Speed mph": 45.4
				},
				{
					"Time": "3/16/18 1:32 AM",
					"Section": 4,
					"Speed mph": 44.5
				},
				{
					"Time": "3/16/18 1:35 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 1:37 AM",
					"Section": 4,
					"Speed mph": 44
				},
				{
					"Time": "3/16/18 1:40 AM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 1:42 AM",
					"Section": 4,
					"Speed mph": 47.8
				},
				{
					"Time": "3/16/18 1:45 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 1:47 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 1:50 AM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 1:52 AM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 1:55 AM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 1:57 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 2:00 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 2:02 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 2:05 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 2:07 AM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 2:10 AM",
					"Section": 4,
					"Speed mph": 47.5
				},
				{
					"Time": "3/16/18 2:12 AM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 2:15 AM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 2:17 AM",
					"Section": 4,
					"Speed mph": 47.3
				},
				{
					"Time": "3/16/18 2:20 AM",
					"Section": 4,
					"Speed mph": 47.3
				},
				{
					"Time": "3/16/18 2:22 AM",
					"Section": 4,
					"Speed mph": 44.9
				},
				{
					"Time": "3/16/18 2:25 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 2:27 AM",
					"Section": 4,
					"Speed mph": 46.6
				},
				{
					"Time": "3/16/18 2:30 AM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 2:32 AM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 2:35 AM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 2:37 AM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 2:40 AM",
					"Section": 4,
					"Speed mph": 42.5
				},
				{
					"Time": "3/16/18 2:42 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 2:45 AM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 2:47 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 2:50 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 2:52 AM",
					"Section": 4,
					"Speed mph": 42.9
				},
				{
					"Time": "3/16/18 2:55 AM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 2:57 AM",
					"Section": 4,
					"Speed mph": 47.2
				},
				{
					"Time": "3/16/18 3:00 AM",
					"Section": 4,
					"Speed mph": 47.6
				},
				{
					"Time": "3/16/18 3:02 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 3:05 AM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 3:07 AM",
					"Section": 4,
					"Speed mph": 47.6
				},
				{
					"Time": "3/16/18 3:10 AM",
					"Section": 4,
					"Speed mph": 44.7
				},
				{
					"Time": "3/16/18 3:12 AM",
					"Section": 4,
					"Speed mph": 46.8
				},
				{
					"Time": "3/16/18 3:15 AM",
					"Section": 4,
					"Speed mph": 47.4
				},
				{
					"Time": "3/16/18 3:17 AM",
					"Section": 4,
					"Speed mph": 47.5
				},
				{
					"Time": "3/16/18 3:20 AM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 3:22 AM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 3:25 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 3:27 AM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 3:30 AM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 3:32 AM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 3:35 AM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 3:37 AM",
					"Section": 4,
					"Speed mph": 47.5
				},
				{
					"Time": "3/16/18 3:40 AM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 3:42 AM",
					"Section": 4,
					"Speed mph": 46.1
				},
				{
					"Time": "3/16/18 3:45 AM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 3:47 AM",
					"Section": 4,
					"Speed mph": 43.9
				},
				{
					"Time": "3/16/18 3:50 AM",
					"Section": 4,
					"Speed mph": 45.7
				},
				{
					"Time": "3/16/18 3:52 AM",
					"Section": 4,
					"Speed mph": 46.7
				},
				{
					"Time": "3/16/18 3:55 AM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 3:57 AM",
					"Section": 4,
					"Speed mph": 44.9
				},
				{
					"Time": "3/16/18 4:00 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 4:02 AM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 4:05 AM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 4:07 AM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 4:10 AM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 4:12 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 4:15 AM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 4:17 AM",
					"Section": 4,
					"Speed mph": 46.6
				},
				{
					"Time": "3/16/18 4:20 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 4:22 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 4:25 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 4:27 AM",
					"Section": 4,
					"Speed mph": 47.4
				},
				{
					"Time": "3/16/18 4:30 AM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 4:32 AM",
					"Section": 4,
					"Speed mph": 47.2
				},
				{
					"Time": "3/16/18 4:35 AM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 4:37 AM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 4:40 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 4:42 AM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 4:45 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 4:47 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 4:50 AM",
					"Section": 4,
					"Speed mph": 47.4
				},
				{
					"Time": "3/16/18 4:52 AM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 4:55 AM",
					"Section": 4,
					"Speed mph": 47.3
				},
				{
					"Time": "3/16/18 4:57 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 5:00 AM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 5:02 AM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 5:05 AM",
					"Section": 4,
					"Speed mph": 44.5
				},
				{
					"Time": "3/16/18 5:07 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 5:10 AM",
					"Section": 4,
					"Speed mph": 47.2
				},
				{
					"Time": "3/16/18 5:12 AM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 5:15 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 5:17 AM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 5:20 AM",
					"Section": 4,
					"Speed mph": 45.4
				},
				{
					"Time": "3/16/18 5:22 AM",
					"Section": 4,
					"Speed mph": 47.3
				},
				{
					"Time": "3/16/18 5:25 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 5:27 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 5:30 AM",
					"Section": 4,
					"Speed mph": 47.5
				},
				{
					"Time": "3/16/18 5:32 AM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 5:35 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 5:37 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 5:40 AM",
					"Section": 4,
					"Speed mph": 46.9
				},
				{
					"Time": "3/16/18 5:42 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 5:45 AM",
					"Section": 4,
					"Speed mph": 44
				},
				{
					"Time": "3/16/18 5:47 AM",
					"Section": 4,
					"Speed mph": 47
				},
				{
					"Time": "3/16/18 5:50 AM",
					"Section": 4,
					"Speed mph": 44.9
				},
				{
					"Time": "3/16/18 5:52 AM",
					"Section": 4,
					"Speed mph": 46.9
				},
				{
					"Time": "3/16/18 5:55 AM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 5:57 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 6:00 AM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 6:02 AM",
					"Section": 4,
					"Speed mph": 47.4
				},
				{
					"Time": "3/16/18 6:05 AM",
					"Section": 4,
					"Speed mph": 42.3
				},
				{
					"Time": "3/16/18 6:07 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 6:10 AM",
					"Section": 4,
					"Speed mph": 45.4
				},
				{
					"Time": "3/16/18 6:12 AM",
					"Section": 4,
					"Speed mph": 46.7
				},
				{
					"Time": "3/16/18 6:15 AM",
					"Section": 4,
					"Speed mph": 44.7
				},
				{
					"Time": "3/16/18 6:17 AM",
					"Section": 4,
					"Speed mph": 46.6
				},
				{
					"Time": "3/16/18 6:20 AM",
					"Section": 4,
					"Speed mph": 46.7
				},
				{
					"Time": "3/16/18 6:22 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 6:25 AM",
					"Section": 4,
					"Speed mph": 45.5
				},
				{
					"Time": "3/16/18 6:27 AM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 6:30 AM",
					"Section": 4,
					"Speed mph": 42.2
				},
				{
					"Time": "3/16/18 6:32 AM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 6:35 AM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 6:37 AM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 6:40 AM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 6:42 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 6:45 AM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 6:47 AM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 6:50 AM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 6:52 AM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 6:55 AM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 6:57 AM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 7:00 AM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 7:02 AM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 7:05 AM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 7:07 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 7:10 AM",
					"Section": 4,
					"Speed mph": 40.4
				},
				{
					"Time": "3/16/18 7:12 AM",
					"Section": 4,
					"Speed mph": 41
				},
				{
					"Time": "3/16/18 7:15 AM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 7:17 AM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 7:20 AM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 7:22 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 7:25 AM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 7:27 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 7:30 AM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 7:32 AM",
					"Section": 4,
					"Speed mph": 44.9
				},
				{
					"Time": "3/16/18 7:35 AM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 7:37 AM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 7:40 AM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 7:42 AM",
					"Section": 4,
					"Speed mph": 45.4
				},
				{
					"Time": "3/16/18 7:45 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 7:47 AM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 7:50 AM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 7:52 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 7:55 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 7:57 AM",
					"Section": 4,
					"Speed mph": 41.3
				},
				{
					"Time": "3/16/18 8:00 AM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 8:02 AM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 8:05 AM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 8:07 AM",
					"Section": 4,
					"Speed mph": 42.7
				},
				{
					"Time": "3/16/18 8:10 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 8:12 AM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 8:15 AM",
					"Section": 4,
					"Speed mph": 41.4
				},
				{
					"Time": "3/16/18 8:17 AM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 8:20 AM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 8:22 AM",
					"Section": 4,
					"Speed mph": 40.9
				},
				{
					"Time": "3/16/18 8:25 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 8:27 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 8:30 AM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 8:32 AM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 8:35 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 8:37 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 8:40 AM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 8:42 AM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 8:45 AM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 8:47 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 8:50 AM",
					"Section": 4,
					"Speed mph": 45.7
				},
				{
					"Time": "3/16/18 8:52 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 8:55 AM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 8:57 AM",
					"Section": 4,
					"Speed mph": 40.4
				},
				{
					"Time": "3/16/18 9:00 AM",
					"Section": 4,
					"Speed mph": 44
				},
				{
					"Time": "3/16/18 9:02 AM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 9:05 AM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 9:07 AM",
					"Section": 4,
					"Speed mph": 45.4
				},
				{
					"Time": "3/16/18 9:10 AM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 9:12 AM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 9:15 AM",
					"Section": 4,
					"Speed mph": 42.8
				},
				{
					"Time": "3/16/18 9:17 AM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 9:20 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 9:22 AM",
					"Section": 4,
					"Speed mph": 40.6
				},
				{
					"Time": "3/16/18 9:25 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 9:27 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 9:30 AM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 9:32 AM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 9:35 AM",
					"Section": 4,
					"Speed mph": 41.1
				},
				{
					"Time": "3/16/18 9:37 AM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 9:40 AM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 9:42 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 9:45 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 9:47 AM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 9:50 AM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 9:52 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 9:55 AM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 9:57 AM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 10:00 AM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 10:02 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 10:05 AM",
					"Section": 4,
					"Speed mph": 44
				},
				{
					"Time": "3/16/18 10:07 AM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 10:10 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 10:12 AM",
					"Section": 4,
					"Speed mph": 40.6
				},
				{
					"Time": "3/16/18 10:15 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 10:17 AM",
					"Section": 4,
					"Speed mph": 43.9
				},
				{
					"Time": "3/16/18 10:20 AM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 10:22 AM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 10:25 AM",
					"Section": 4,
					"Speed mph": 40.5
				},
				{
					"Time": "3/16/18 10:27 AM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 10:30 AM",
					"Section": 4,
					"Speed mph": 42.3
				},
				{
					"Time": "3/16/18 10:32 AM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 10:35 AM",
					"Section": 4,
					"Speed mph": 41
				},
				{
					"Time": "3/16/18 10:37 AM",
					"Section": 4,
					"Speed mph": 42.8
				},
				{
					"Time": "3/16/18 10:40 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 10:42 AM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 10:45 AM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 10:47 AM",
					"Section": 4,
					"Speed mph": 42.7
				},
				{
					"Time": "3/16/18 10:50 AM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 10:52 AM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 10:55 AM",
					"Section": 4,
					"Speed mph": 46.1
				},
				{
					"Time": "3/16/18 10:57 AM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 11:00 AM",
					"Section": 4,
					"Speed mph": 45.7
				},
				{
					"Time": "3/16/18 11:02 AM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 11:05 AM",
					"Section": 4,
					"Speed mph": 41.1
				},
				{
					"Time": "3/16/18 11:07 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 11:10 AM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 11:12 AM",
					"Section": 4,
					"Speed mph": 40.9
				},
				{
					"Time": "3/16/18 11:15 AM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 11:17 AM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 11:20 AM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 11:22 AM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 11:25 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 11:27 AM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 11:30 AM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 11:32 AM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 11:35 AM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 11:37 AM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 11:40 AM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 11:42 AM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 11:45 AM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 11:47 AM",
					"Section": 4,
					"Speed mph": 46.1
				},
				{
					"Time": "3/16/18 11:50 AM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 11:52 AM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 11:55 AM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 11:57 AM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 12:00 PM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 12:02 PM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 12:05 PM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 12:07 PM",
					"Section": 4,
					"Speed mph": 46.1
				},
				{
					"Time": "3/16/18 12:10 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 12:12 PM",
					"Section": 4,
					"Speed mph": 42.5
				},
				{
					"Time": "3/16/18 12:15 PM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 12:17 PM",
					"Section": 4,
					"Speed mph": 42.2
				},
				{
					"Time": "3/16/18 12:20 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 12:22 PM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 12:25 PM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 12:27 PM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 12:30 PM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 12:32 PM",
					"Section": 4,
					"Speed mph": 44.7
				},
				{
					"Time": "3/16/18 12:35 PM",
					"Section": 4,
					"Speed mph": 41.4
				},
				{
					"Time": "3/16/18 12:37 PM",
					"Section": 4,
					"Speed mph": 40.6
				},
				{
					"Time": "3/16/18 12:40 PM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 12:42 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 12:45 PM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 12:47 PM",
					"Section": 4,
					"Speed mph": 40.5
				},
				{
					"Time": "3/16/18 12:50 PM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 12:52 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 12:55 PM",
					"Section": 4,
					"Speed mph": 44.7
				},
				{
					"Time": "3/16/18 12:57 PM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 1:00 PM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 1:02 PM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 1:05 PM",
					"Section": 4,
					"Speed mph": 42.9
				},
				{
					"Time": "3/16/18 1:07 PM",
					"Section": 4,
					"Speed mph": 43.8
				},
				{
					"Time": "3/16/18 1:10 PM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 1:12 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 1:15 PM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 1:17 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 1:20 PM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 1:22 PM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 1:25 PM",
					"Section": 4,
					"Speed mph": 40.8
				},
				{
					"Time": "3/16/18 1:27 PM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 1:30 PM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 1:32 PM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 1:35 PM",
					"Section": 4,
					"Speed mph": 40.5
				},
				{
					"Time": "3/16/18 1:37 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 1:40 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 1:42 PM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 1:45 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 1:47 PM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 1:50 PM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 1:52 PM",
					"Section": 4,
					"Speed mph": 41.1
				},
				{
					"Time": "3/16/18 1:55 PM",
					"Section": 4,
					"Speed mph": 40.5
				},
				{
					"Time": "3/16/18 1:57 PM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 2:00 PM",
					"Section": 4,
					"Speed mph": 44.9
				},
				{
					"Time": "3/16/18 2:02 PM",
					"Section": 4,
					"Speed mph": 40.4
				},
				{
					"Time": "3/16/18 2:05 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 2:07 PM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 2:10 PM",
					"Section": 4,
					"Speed mph": 44.5
				},
				{
					"Time": "3/16/18 2:12 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 2:15 PM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 2:17 PM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 2:20 PM",
					"Section": 4,
					"Speed mph": 42.7
				},
				{
					"Time": "3/16/18 2:22 PM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 2:25 PM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 2:27 PM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 2:30 PM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 2:32 PM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 2:35 PM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 2:37 PM",
					"Section": 4,
					"Speed mph": 42.2
				},
				{
					"Time": "3/16/18 2:40 PM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 2:42 PM",
					"Section": 4,
					"Speed mph": 43.9
				},
				{
					"Time": "3/16/18 2:45 PM",
					"Section": 4,
					"Speed mph": 40.8
				},
				{
					"Time": "3/16/18 2:47 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 2:50 PM",
					"Section": 4,
					"Speed mph": 45.7
				},
				{
					"Time": "3/16/18 2:52 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 2:55 PM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 2:57 PM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 3:00 PM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 3:02 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 3:05 PM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 3:07 PM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 3:10 PM",
					"Section": 4,
					"Speed mph": 45.5
				},
				{
					"Time": "3/16/18 3:12 PM",
					"Section": 4,
					"Speed mph": 42.2
				},
				{
					"Time": "3/16/18 3:15 PM",
					"Section": 4,
					"Speed mph": 40.9
				},
				{
					"Time": "3/16/18 3:17 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 3:20 PM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 3:22 PM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 3:25 PM",
					"Section": 4,
					"Speed mph": 42.7
				},
				{
					"Time": "3/16/18 3:27 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 3:30 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 3:32 PM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 3:35 PM",
					"Section": 4,
					"Speed mph": 44.5
				},
				{
					"Time": "3/16/18 3:37 PM",
					"Section": 4,
					"Speed mph": 40.9
				},
				{
					"Time": "3/16/18 3:40 PM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 3:42 PM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 3:45 PM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 3:47 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 3:50 PM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 3:52 PM",
					"Section": 4,
					"Speed mph": 46.3
				},
				{
					"Time": "3/16/18 3:55 PM",
					"Section": 4,
					"Speed mph": 45.5
				},
				{
					"Time": "3/16/18 3:57 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 4:00 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 4:02 PM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 4:05 PM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 4:07 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 4:10 PM",
					"Section": 4,
					"Speed mph": 44.1
				},
				{
					"Time": "3/16/18 4:12 PM",
					"Section": 4,
					"Speed mph": 43.4
				},
				{
					"Time": "3/16/18 4:15 PM",
					"Section": 4,
					"Speed mph": 41.1
				},
				{
					"Time": "3/16/18 4:17 PM",
					"Section": 4,
					"Speed mph": 41.1
				},
				{
					"Time": "3/16/18 4:20 PM",
					"Section": 4,
					"Speed mph": 42.5
				},
				{
					"Time": "3/16/18 4:22 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 4:25 PM",
					"Section": 4,
					"Speed mph": 46.1
				},
				{
					"Time": "3/16/18 4:27 PM",
					"Section": 4,
					"Speed mph": 44.5
				},
				{
					"Time": "3/16/18 4:30 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 4:32 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 4:35 PM",
					"Section": 4,
					"Speed mph": 46.6
				},
				{
					"Time": "3/16/18 4:37 PM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 4:40 PM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 4:42 PM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 4:45 PM",
					"Section": 4,
					"Speed mph": 42.7
				},
				{
					"Time": "3/16/18 4:47 PM",
					"Section": 4,
					"Speed mph": 41
				},
				{
					"Time": "3/16/18 4:50 PM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 4:52 PM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 4:55 PM",
					"Section": 4,
					"Speed mph": 40.6
				},
				{
					"Time": "3/16/18 4:57 PM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 5:00 PM",
					"Section": 4,
					"Speed mph": 46.1
				},
				{
					"Time": "3/16/18 5:02 PM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 5:05 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 5:07 PM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 5:10 PM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 5:12 PM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 5:15 PM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 5:17 PM",
					"Section": 4,
					"Speed mph": 42.8
				},
				{
					"Time": "3/16/18 5:20 PM",
					"Section": 4,
					"Speed mph": 46
				},
				{
					"Time": "3/16/18 5:22 PM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 5:25 PM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 5:27 PM",
					"Section": 4,
					"Speed mph": 42.2
				},
				{
					"Time": "3/16/18 5:30 PM",
					"Section": 4,
					"Speed mph": 43.9
				},
				{
					"Time": "3/16/18 5:32 PM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 5:35 PM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 5:37 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 5:40 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 5:42 PM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 5:45 PM",
					"Section": 4,
					"Speed mph": 44.9
				},
				{
					"Time": "3/16/18 5:47 PM",
					"Section": 4,
					"Speed mph": 44.9
				},
				{
					"Time": "3/16/18 5:50 PM",
					"Section": 4,
					"Speed mph": 44.7
				},
				{
					"Time": "3/16/18 5:52 PM",
					"Section": 4,
					"Speed mph": 46.4
				},
				{
					"Time": "3/16/18 5:55 PM",
					"Section": 4,
					"Speed mph": 45.4
				},
				{
					"Time": "3/16/18 5:57 PM",
					"Section": 4,
					"Speed mph": 40.6
				},
				{
					"Time": "3/16/18 6:00 PM",
					"Section": 4,
					"Speed mph": 43.9
				},
				{
					"Time": "3/16/18 6:02 PM",
					"Section": 4,
					"Speed mph": 44.1
				},
				{
					"Time": "3/16/18 6:05 PM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 6:07 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 6:10 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 6:12 PM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 6:15 PM",
					"Section": 4,
					"Speed mph": 40.4
				},
				{
					"Time": "3/16/18 6:17 PM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 6:20 PM",
					"Section": 4,
					"Speed mph": 42.7
				},
				{
					"Time": "3/16/18 6:22 PM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 6:25 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 6:27 PM",
					"Section": 4,
					"Speed mph": 42.9
				},
				{
					"Time": "3/16/18 6:30 PM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 6:32 PM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 6:35 PM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 6:37 PM",
					"Section": 4,
					"Speed mph": 40.4
				},
				{
					"Time": "3/16/18 6:40 PM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 6:42 PM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 6:45 PM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 6:47 PM",
					"Section": 4,
					"Speed mph": 45.5
				},
				{
					"Time": "3/16/18 6:50 PM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 6:52 PM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 6:55 PM",
					"Section": 4,
					"Speed mph": 41.3
				},
				{
					"Time": "3/16/18 6:57 PM",
					"Section": 4,
					"Speed mph": 42.9
				},
				{
					"Time": "3/16/18 7:00 PM",
					"Section": 4,
					"Speed mph": 44.5
				},
				{
					"Time": "3/16/18 7:02 PM",
					"Section": 4,
					"Speed mph": 44
				},
				{
					"Time": "3/16/18 7:05 PM",
					"Section": 4,
					"Speed mph": 42.5
				},
				{
					"Time": "3/16/18 7:07 PM",
					"Section": 4,
					"Speed mph": 45.5
				},
				{
					"Time": "3/16/18 7:10 PM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 7:12 PM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 7:15 PM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 7:17 PM",
					"Section": 4,
					"Speed mph": 45.1
				},
				{
					"Time": "3/16/18 7:20 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 7:22 PM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 7:25 PM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 7:27 PM",
					"Section": 4,
					"Speed mph": 41.5
				},
				{
					"Time": "3/16/18 7:30 PM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 7:32 PM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 7:35 PM",
					"Section": 4,
					"Speed mph": 42.7
				},
				{
					"Time": "3/16/18 7:37 PM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 7:40 PM",
					"Section": 4,
					"Speed mph": 40.9
				},
				{
					"Time": "3/16/18 7:42 PM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 7:45 PM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 7:47 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 7:50 PM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 7:52 PM",
					"Section": 4,
					"Speed mph": 44.7
				},
				{
					"Time": "3/16/18 7:55 PM",
					"Section": 4,
					"Speed mph": 44.5
				},
				{
					"Time": "3/16/18 7:57 PM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 8:00 PM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 8:02 PM",
					"Section": 4,
					"Speed mph": 40.5
				},
				{
					"Time": "3/16/18 8:05 PM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 8:07 PM",
					"Section": 4,
					"Speed mph": 41.3
				},
				{
					"Time": "3/16/18 8:10 PM",
					"Section": 4,
					"Speed mph": 42.3
				},
				{
					"Time": "3/16/18 8:12 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 8:15 PM",
					"Section": 4,
					"Speed mph": 44.1
				},
				{
					"Time": "3/16/18 8:17 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 8:20 PM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 8:22 PM",
					"Section": 4,
					"Speed mph": 40.4
				},
				{
					"Time": "3/16/18 8:25 PM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 8:27 PM",
					"Section": 4,
					"Speed mph": 40.9
				},
				{
					"Time": "3/16/18 8:30 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 8:32 PM",
					"Section": 4,
					"Speed mph": 40.8
				},
				{
					"Time": "3/16/18 8:35 PM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 8:37 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 8:40 PM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 8:42 PM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 8:45 PM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 8:47 PM",
					"Section": 4,
					"Speed mph": 43.8
				},
				{
					"Time": "3/16/18 8:50 PM",
					"Section": 4,
					"Speed mph": 42.5
				},
				{
					"Time": "3/16/18 8:52 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 8:55 PM",
					"Section": 4,
					"Speed mph": 41.4
				},
				{
					"Time": "3/16/18 8:57 PM",
					"Section": 4,
					"Speed mph": 41.4
				},
				{
					"Time": "3/16/18 9:00 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 9:02 PM",
					"Section": 4,
					"Speed mph": 45.2
				},
				{
					"Time": "3/16/18 9:05 PM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 9:07 PM",
					"Section": 4,
					"Speed mph": 41.9
				},
				{
					"Time": "3/16/18 9:10 PM",
					"Section": 4,
					"Speed mph": 41.3
				},
				{
					"Time": "3/16/18 9:12 PM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 9:15 PM",
					"Section": 4,
					"Speed mph": 45.8
				},
				{
					"Time": "3/16/18 9:17 PM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 9:20 PM",
					"Section": 4,
					"Speed mph": 43.5
				},
				{
					"Time": "3/16/18 9:22 PM",
					"Section": 4,
					"Speed mph": 44.1
				},
				{
					"Time": "3/16/18 9:25 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 9:27 PM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 9:30 PM",
					"Section": 4,
					"Speed mph": 40.6
				},
				{
					"Time": "3/16/18 9:32 PM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 9:35 PM",
					"Section": 4,
					"Speed mph": 41.6
				},
				{
					"Time": "3/16/18 9:37 PM",
					"Section": 4,
					"Speed mph": 42.9
				},
				{
					"Time": "3/16/18 9:40 PM",
					"Section": 4,
					"Speed mph": 43.6
				},
				{
					"Time": "3/16/18 9:42 PM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 9:45 PM",
					"Section": 4,
					"Speed mph": 40.7
				},
				{
					"Time": "3/16/18 9:47 PM",
					"Section": 4,
					"Speed mph": 43.8
				},
				{
					"Time": "3/16/18 9:50 PM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 9:52 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 9:55 PM",
					"Section": 4,
					"Speed mph": 44.8
				},
				{
					"Time": "3/16/18 9:57 PM",
					"Section": 4,
					"Speed mph": 45.7
				},
				{
					"Time": "3/16/18 10:00 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 10:02 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 10:05 PM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 10:07 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 10:10 PM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 10:12 PM",
					"Section": 4,
					"Speed mph": 44.3
				},
				{
					"Time": "3/16/18 10:15 PM",
					"Section": 4,
					"Speed mph": 45.5
				},
				{
					"Time": "3/16/18 10:17 PM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 10:20 PM",
					"Section": 4,
					"Speed mph": 44.2
				},
				{
					"Time": "3/16/18 10:22 PM",
					"Section": 4,
					"Speed mph": 46.2
				},
				{
					"Time": "3/16/18 10:25 PM",
					"Section": 4,
					"Speed mph": 41.2
				},
				{
					"Time": "3/16/18 10:27 PM",
					"Section": 4,
					"Speed mph": 46.8
				},
				{
					"Time": "3/16/18 10:30 PM",
					"Section": 4,
					"Speed mph": 45.6
				},
				{
					"Time": "3/16/18 10:32 PM",
					"Section": 4,
					"Speed mph": 47.2
				},
				{
					"Time": "3/16/18 10:35 PM",
					"Section": 4,
					"Speed mph": 44
				},
				{
					"Time": "3/16/18 10:37 PM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 10:40 PM",
					"Section": 4,
					"Speed mph": 44.6
				},
				{
					"Time": "3/16/18 10:42 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 10:45 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 10:47 PM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 10:50 PM",
					"Section": 4,
					"Speed mph": 43.3
				},
				{
					"Time": "3/16/18 10:52 PM",
					"Section": 4,
					"Speed mph": 43
				},
				{
					"Time": "3/16/18 10:55 PM",
					"Section": 4,
					"Speed mph": 44.1
				},
				{
					"Time": "3/16/18 10:57 PM",
					"Section": 4,
					"Speed mph": 42.6
				},
				{
					"Time": "3/16/18 11:00 PM",
					"Section": 4,
					"Speed mph": 42.8
				},
				{
					"Time": "3/16/18 11:02 PM",
					"Section": 4,
					"Speed mph": 44.4
				},
				{
					"Time": "3/16/18 11:05 PM",
					"Section": 4,
					"Speed mph": 42.9
				},
				{
					"Time": "3/16/18 11:07 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 11:10 PM",
					"Section": 4,
					"Speed mph": 43.1
				},
				{
					"Time": "3/16/18 11:12 PM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 11:15 PM",
					"Section": 4,
					"Speed mph": 42.1
				},
				{
					"Time": "3/16/18 11:17 PM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 11:20 PM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 11:22 PM",
					"Section": 4,
					"Speed mph": 45.9
				},
				{
					"Time": "3/16/18 11:25 PM",
					"Section": 4,
					"Speed mph": 45.3
				},
				{
					"Time": "3/16/18 11:27 PM",
					"Section": 4,
					"Speed mph": 45
				},
				{
					"Time": "3/16/18 11:30 PM",
					"Section": 4,
					"Speed mph": 41.8
				},
				{
					"Time": "3/16/18 11:32 PM",
					"Section": 4,
					"Speed mph": 46.8
				},
				{
					"Time": "3/16/18 11:35 PM",
					"Section": 4,
					"Speed mph": 42.8
				},
				{
					"Time": "3/16/18 11:37 PM",
					"Section": 4,
					"Speed mph": 42
				},
				{
					"Time": "3/16/18 11:40 PM",
					"Section": 4,
					"Speed mph": 42.4
				},
				{
					"Time": "3/16/18 11:42 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 11:45 PM",
					"Section": 4,
					"Speed mph": 46.5
				},
				{
					"Time": "3/16/18 11:47 PM",
					"Section": 4,
					"Speed mph": 43.7
				},
				{
					"Time": "3/16/18 11:50 PM",
					"Section": 4,
					"Speed mph": 42.9
				},
				{
					"Time": "3/16/18 11:52 PM",
					"Section": 4,
					"Speed mph": 41.7
				},
				{
					"Time": "3/16/18 11:55 PM",
					"Section": 4,
					"Speed mph": 43.2
				},
				{
					"Time": "3/16/18 11:57 PM",
					"Section": 4,
					"Speed mph": 44.9
				}
			]
		};
	}

	tick() {

		this.setState(prevState => ({
			seconds: prevState.time[prevState.count]['Time'],
			count:prevState.count+1,
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const {isMenuOpen, opacity, toggleMenu, trips, timeStampLookUp, currentTime} = this.props;

		return (
			<div className="meta-data">
				<h3>Cellint Data Visualization for Seattle </h3>
				<p>Trips are taken from March 16, 2016 12:02 AM to 11:57 PM</p>
				{/*{this.state.currentTime1}*/}

				<div>
					Seconds: {this.state.seconds}
				</div>
				{/*<Loading time={this.props.time}></Loading>*/}
			</div>
		);
	}
}

// ReactDOM.render(<InfoPanel />, mountNode);




