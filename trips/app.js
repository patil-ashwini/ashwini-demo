/* global document, fetch, window */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';


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
		'http://localhost:3000/locations',
	LOCATIONDATA:
		[
	{
		"section": 4,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33935,
		"latbegin": 47.57154,
		"lonend": -122.33935,
		"latend": 47.57414
	},
	{
		"section": 5,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33935,
		"latbegin": 47.57414,
		"lonend": -122.33935,
		"latend": 47.57675
	},
	{
		"section": 6,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33935,
		"latbegin": 47.57675,
		"lonend": -122.33928,
		"latend": 47.57935
	},
	{
		"section": 7,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33928,
		"latbegin": 47.57935,
		"lonend": -122.33927,
		"latend": 47.58195
	},
	{
		"section": 8,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33927,
		"latbegin": 47.58195,
		"lonend": -122.33932,
		"latend": 47.58456
	},
	{
		"section": 9,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33932,
		"latbegin": 47.58456,
		"lonend": -122.33881,
		"latend": 47.58711
	},
	{
		"section": 10,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.1,
		"lonbegin": -122.33881,
		"latbegin": 47.58711,
		"lonend": -122.33734,
		"latend": 47.58951
	},
	{
		"section": 11,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.1,
		"lonbegin": -122.33734,
		"latbegin": 47.58951,
		"lonend": -122.33607,
		"latend": 47.59197
	},
	{
		"section": 12,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33607,
		"latbegin": 47.59197,
		"lonend": -122.33435,
		"latend": 47.59428
	},
	{
		"section": 13,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.8,
		"lonbegin": -122.33435,
		"latbegin": 47.59428,
		"lonend": -122.33472,
		"latend": 47.5968
	},
	{
		"section": 14,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33472,
		"latbegin": 47.5968,
		"lonend": -122.33552,
		"latend": 47.59928
	},
	{
		"section": 15,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33552,
		"latbegin": 47.59928,
		"lonend": -122.33619,
		"latend": 47.60178
	},
	{
		"section": 16,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.5,
		"lonbegin": -122.33619,
		"latbegin": 47.60178,
		"lonend": -122.33806,
		"latend": 47.60383
	},
	{
		"section": 17,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.6,
		"lonbegin": -122.33806,
		"latbegin": 47.60383,
		"lonend": -122.33996,
		"latend": 47.60586
	},
	{
		"section": 18,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.6,
		"lonbegin": -122.33996,
		"latbegin": 47.60586,
		"lonend": -122.34187,
		"latend": 47.60789
	},
	{
		"section": 19,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.6,
		"lonbegin": -122.34187,
		"latbegin": 47.60789,
		"lonend": -122.3439,
		"latend": 47.60985
	},
	{
		"section": 20,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.7,
		"lonbegin": -122.3439,
		"latbegin": 47.60985,
		"lonend": -122.34638,
		"latend": 47.61157
	},
	{
		"section": 21,
		"road": "SR99",
		"direction": "North",
		"length (m)": 233.6,
		"lonbegin": -122.34638,
		"latbegin": 47.61157,
		"lonend": -122.34777,
		"latend": 47.61341
	},
	{
		"section": 22,
		"road": "SR99",
		"direction": "North",
		"length (m)": 233.4,
		"lonbegin": -122.34777,
		"latbegin": 47.61341,
		"lonend": -122.3464,
		"latend": 47.61515
	},
	{
		"section": 23,
		"road": "SR99",
		"direction": "North",
		"length (m)": 233.9,
		"lonbegin": -122.3464,
		"latbegin": 47.61515,
		"lonend": -122.34438,
		"latend": 47.61672
	},
	{
		"section": 24,
		"road": "SR99",
		"direction": "North",
		"length (m)": 233.4,
		"lonbegin": -122.34438,
		"latbegin": 47.61672,
		"lonend": -122.34354,
		"latend": 47.61861
	},
	{
		"section": 25,
		"road": "SR99",
		"direction": "North",
		"length (m)": 222.3,
		"lonbegin": -122.34354,
		"latbegin": 47.61861,
		"lonend": -122.34366,
		"latend": 47.62058
	},
	{
		"section": 26,
		"road": "SR99",
		"direction": "North",
		"length (m)": 222.1,
		"lonbegin": -122.34366,
		"latbegin": 47.62058,
		"lonend": -122.34379,
		"latend": 47.62254
	},
	{
		"section": 27,
		"road": "SR99",
		"direction": "North",
		"length (m)": 222,
		"lonbegin": -122.34379,
		"latbegin": 47.62254,
		"lonend": -122.3436,
		"latend": 47.62446
	},
	{
		"section": 28,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.3436,
		"latbegin": 47.62446,
		"lonend": -122.34349,
		"latend": 47.62707
	},
	{
		"section": 29,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.34349,
		"latbegin": 47.62707,
		"lonend": -122.34344,
		"latend": 47.62968
	},
	{
		"section": 30,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.34344,
		"latbegin": 47.62968,
		"lonend": -122.34341,
		"latend": 47.63229
	},
	{
		"section": 31,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.34341,
		"latbegin": 47.63229,
		"lonend": -122.34338,
		"latend": 47.6349
	},
	{
		"section": 32,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.34338,
		"latbegin": 47.6349,
		"lonend": -122.34428,
		"latend": 47.63739
	},
	{
		"section": 33,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.8,
		"lonbegin": -122.34428,
		"latbegin": 47.63739,
		"lonend": -122.34584,
		"latend": 47.63978
	},
	{
		"section": 34,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.34584,
		"latbegin": 47.63978,
		"lonend": -122.34688,
		"latend": 47.64229
	},
	{
		"section": 35,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.34688,
		"latbegin": 47.64229,
		"lonend": -122.34733,
		"latend": 47.64487
	},
	{
		"section": 36,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.7,
		"lonbegin": -122.34733,
		"latbegin": 47.64487,
		"lonend": -122.34736,
		"latend": 47.64748
	},
	{
		"section": 37,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.8,
		"lonbegin": -122.34736,
		"latbegin": 47.64748,
		"lonend": -122.34729,
		"latend": 47.65009
	},
	{
		"section": 38,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.8,
		"lonbegin": -122.34729,
		"latbegin": 47.65009,
		"lonend": -122.34725,
		"latend": 47.6527
	},
	{
		"section": 39,
		"road": "SR99",
		"direction": "North",
		"length (m)": 255.5,
		"lonbegin": -122.34725,
		"latbegin": 47.6527,
		"lonend": -122.34723,
		"latend": 47.65497
	},
	{
		"section": 40,
		"road": "SR99",
		"direction": "North",
		"length (m)": 255.6,
		"lonbegin": -122.34723,
		"latbegin": 47.65497,
		"lonend": -122.34727,
		"latend": 47.65724
	},
	{
		"section": 41,
		"road": "SR99",
		"direction": "North",
		"length (m)": 255.5,
		"lonbegin": -122.34727,
		"latbegin": 47.65724,
		"lonend": -122.34727,
		"latend": 47.65951
	},
	{
		"section": 42,
		"road": "SR99",
		"direction": "North",
		"length (m)": 255.5,
		"lonbegin": -122.34727,
		"latbegin": 47.65951,
		"lonend": -122.34728,
		"latend": 47.66178
	},
	{
		"section": 43,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.34728,
		"latbegin": 47.66178,
		"lonend": -122.34726,
		"latend": 47.6643
	},
	{
		"section": 44,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.34726,
		"latbegin": 47.6643,
		"lonend": -122.34724,
		"latend": 47.66681
	},
	{
		"section": 45,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.34724,
		"latbegin": 47.66681,
		"lonend": -122.34721,
		"latend": 47.66932
	},
	{
		"section": 46,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.34721,
		"latbegin": 47.66932,
		"lonend": -122.34719,
		"latend": 47.67184
	},
	{
		"section": 47,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.34719,
		"latbegin": 47.67184,
		"lonend": -122.34714,
		"latend": 47.67435
	},
	{
		"section": 48,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.34714,
		"latbegin": 47.67435,
		"lonend": -122.3463,
		"latend": 47.67677
	},
	{
		"section": 49,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.3463,
		"latbegin": 47.67677,
		"lonend": -122.34534,
		"latend": 47.67916
	},
	{
		"section": 50,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.5,
		"lonbegin": -122.34534,
		"latbegin": 47.67916,
		"lonend": -122.34439,
		"latend": 47.68155
	},
	{
		"section": 51,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.34439,
		"latbegin": 47.68155,
		"lonend": -122.3444,
		"latend": 47.68407
	},
	{
		"section": 52,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.3444,
		"latbegin": 47.68407,
		"lonend": -122.3444,
		"latend": 47.68658
	},
	{
		"section": 53,
		"road": "SR99",
		"direction": "North",
		"length (m)": 282.8,
		"lonbegin": -122.3444,
		"latbegin": 47.68658,
		"lonend": -122.34442,
		"latend": 47.68909
	},
	{
		"section": 54,
		"road": "SR99",
		"direction": "North",
		"length (m)": 298,
		"lonbegin": -122.34442,
		"latbegin": 47.68909,
		"lonend": -122.34452,
		"latend": 47.69173
	},
	{
		"section": 55,
		"road": "SR99",
		"direction": "North",
		"length (m)": 299,
		"lonbegin": -122.34452,
		"latbegin": 47.69173,
		"lonend": -122.34455,
		"latend": 47.69439
	},
	{
		"section": 56,
		"road": "SR99",
		"direction": "North",
		"length (m)": 299,
		"lonbegin": -122.34455,
		"latbegin": 47.69439,
		"lonend": -122.34459,
		"latend": 47.69704
	},
	{
		"section": 57,
		"road": "SR99",
		"direction": "North",
		"length (m)": 298.7,
		"lonbegin": -122.34459,
		"latbegin": 47.69704,
		"lonend": -122.34453,
		"latend": 47.69969
	},
	{
		"section": 120,
		"road": "SR99",
		"direction": "North",
		"length (m)": 298.2,
		"lonbegin": -122.34469,
		"latbegin": 47.6997,
		"lonend": -122.34459,
		"latend": 47.69706
	},
	{
		"section": 121,
		"road": "SR99",
		"direction": "North",
		"length (m)": 298.7,
		"lonbegin": -122.34459,
		"latbegin": 47.69706,
		"lonend": -122.34455,
		"latend": 47.69441
	},
	{
		"section": 122,
		"road": "SR99",
		"direction": "North",
		"length (m)": 298.7,
		"lonbegin": -122.34455,
		"latbegin": 47.69441,
		"lonend": -122.34452,
		"latend": 47.69175
	},
	{
		"section": 123,
		"road": "SR99",
		"direction": "North",
		"length (m)": 297.5,
		"lonbegin": -122.34452,
		"latbegin": 47.69175,
		"lonend": -122.34458,
		"latend": 47.68912
	},
	{
		"section": 124,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34458,
		"latbegin": 47.68912,
		"lonend": -122.34457,
		"latend": 47.68659
	},
	{
		"section": 125,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34457,
		"latbegin": 47.68659,
		"lonend": -122.34456,
		"latend": 47.68406
	},
	{
		"section": 126,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34456,
		"latbegin": 47.68406,
		"lonend": -122.34454,
		"latend": 47.68153
	},
	{
		"section": 127,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.4,
		"lonbegin": -122.34454,
		"latbegin": 47.68153,
		"lonend": -122.34552,
		"latend": 47.67913
	},
	{
		"section": 128,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.5,
		"lonbegin": -122.34552,
		"latbegin": 47.67913,
		"lonend": -122.3465,
		"latend": 47.67673
	},
	{
		"section": 129,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.3465,
		"latbegin": 47.67673,
		"lonend": -122.34728,
		"latend": 47.67427
	},
	{
		"section": 130,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34728,
		"latbegin": 47.67427,
		"lonend": -122.34731,
		"latend": 47.67174
	},
	{
		"section": 131,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34731,
		"latbegin": 47.67174,
		"lonend": -122.34732,
		"latend": 47.66921
	},
	{
		"section": 132,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34732,
		"latbegin": 47.66921,
		"lonend": -122.34736,
		"latend": 47.66668
	},
	{
		"section": 133,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34736,
		"latbegin": 47.66668,
		"lonend": -122.34741,
		"latend": 47.66416
	},
	{
		"section": 134,
		"road": "SR99",
		"direction": "North",
		"length (m)": 284.6,
		"lonbegin": -122.34741,
		"latbegin": 47.66416,
		"lonend": -122.34743,
		"latend": 47.66163
	},
	{
		"section": 135,
		"road": "SR99",
		"direction": "North",
		"length (m)": 250.8,
		"lonbegin": -122.34743,
		"latbegin": 47.66163,
		"lonend": -122.34743,
		"latend": 47.6594
	},
	{
		"section": 136,
		"road": "SR99",
		"direction": "North",
		"length (m)": 250.9,
		"lonbegin": -122.34743,
		"latbegin": 47.6594,
		"lonend": -122.34742,
		"latend": 47.65717
	},
	{
		"section": 137,
		"road": "SR99",
		"direction": "North",
		"length (m)": 250.9,
		"lonbegin": -122.34742,
		"latbegin": 47.65717,
		"lonend": -122.34738,
		"latend": 47.65494
	},
	{
		"section": 138,
		"road": "SR99",
		"direction": "North",
		"length (m)": 250.8,
		"lonbegin": -122.34738,
		"latbegin": 47.65494,
		"lonend": -122.34737,
		"latend": 47.65271
	},
	{
		"section": 139,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.6,
		"lonbegin": -122.34737,
		"latbegin": 47.65271,
		"lonend": -122.34741,
		"latend": 47.65011
	},
	{
		"section": 140,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34741,
		"latbegin": 47.65011,
		"lonend": -122.34747,
		"latend": 47.6475
	},
	{
		"section": 141,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34747,
		"latbegin": 47.6475,
		"lonend": -122.34746,
		"latend": 47.64489
	},
	{
		"section": 142,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34746,
		"latbegin": 47.64489,
		"lonend": -122.34704,
		"latend": 47.64231
	},
	{
		"section": 143,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34704,
		"latbegin": 47.64231,
		"lonend": -122.34601,
		"latend": 47.6398
	},
	{
		"section": 144,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.5,
		"lonbegin": -122.34601,
		"latbegin": 47.6398,
		"lonend": -122.34446,
		"latend": 47.63741
	},
	{
		"section": 145,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.3,
		"lonbegin": -122.34446,
		"latbegin": 47.63741,
		"lonend": -122.34354,
		"latend": 47.63493
	},
	{
		"section": 146,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34354,
		"latbegin": 47.63493,
		"lonend": -122.34357,
		"latend": 47.63232
	},
	{
		"section": 147,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34357,
		"latbegin": 47.63232,
		"lonend": -122.34359,
		"latend": 47.62971
	},
	{
		"section": 148,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34359,
		"latbegin": 47.62971,
		"lonend": -122.34366,
		"latend": 47.62711
	},
	{
		"section": 149,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293.4,
		"lonbegin": -122.34366,
		"latbegin": 47.62711,
		"lonend": -122.34378,
		"latend": 47.6245
	},
	{
		"section": 150,
		"road": "SR99",
		"direction": "North",
		"length (m)": 228.7,
		"lonbegin": -122.34378,
		"latbegin": 47.6245,
		"lonend": -122.34396,
		"latend": 47.62251
	},
	{
		"section": 151,
		"road": "SR99",
		"direction": "North",
		"length (m)": 228.8,
		"lonbegin": -122.34396,
		"latbegin": 47.62251,
		"lonend": -122.34377,
		"latend": 47.62049
	},
	{
		"section": 152,
		"road": "SR99",
		"direction": "North",
		"length (m)": 228.9,
		"lonbegin": -122.34377,
		"latbegin": 47.62049,
		"lonend": -122.34367,
		"latend": 47.61846
	},
	{
		"section": 153,
		"road": "SR99",
		"direction": "North",
		"length (m)": 229.7,
		"lonbegin": -122.34367,
		"latbegin": 47.61846,
		"lonend": -122.34467,
		"latend": 47.61664
	},
	{
		"section": 154,
		"road": "SR99",
		"direction": "North",
		"length (m)": 230.1,
		"lonbegin": -122.34467,
		"latbegin": 47.61664,
		"lonend": -122.34667,
		"latend": 47.61511
	},
	{
		"section": 155,
		"road": "SR99",
		"direction": "North",
		"length (m)": 229.8,
		"lonbegin": -122.34667,
		"latbegin": 47.61511,
		"lonend": -122.34788,
		"latend": 47.61335
	},
	{
		"section": 156,
		"road": "SR99",
		"direction": "North",
		"length (m)": 229.9,
		"lonbegin": -122.34788,
		"latbegin": 47.61335,
		"lonend": -122.3465,
		"latend": 47.61154
	},
	{
		"section": 157,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.7,
		"lonbegin": -122.3465,
		"latbegin": 47.61154,
		"lonend": -122.34414,
		"latend": 47.60975
	},
	{
		"section": 158,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.7,
		"lonbegin": -122.34414,
		"latbegin": 47.60975,
		"lonend": -122.34194,
		"latend": 47.60785
	},
	{
		"section": 159,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.6,
		"lonbegin": -122.34194,
		"latbegin": 47.60785,
		"lonend": -122.34003,
		"latend": 47.60583
	},
	{
		"section": 160,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.6,
		"lonbegin": -122.34003,
		"latbegin": 47.60583,
		"lonend": -122.33814,
		"latend": 47.60379
	},
	{
		"section": 161,
		"road": "SR99",
		"direction": "North",
		"length (m)": 270.6,
		"lonbegin": -122.33814,
		"latbegin": 47.60379,
		"lonend": -122.33627,
		"latend": 47.60174
	},
	{
		"section": 162,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33627,
		"latbegin": 47.60174,
		"lonend": -122.33561,
		"latend": 47.59924
	},
	{
		"section": 163,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33561,
		"latbegin": 47.59924,
		"lonend": -122.33483,
		"latend": 47.59675
	},
	{
		"section": 164,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.6,
		"lonbegin": -122.33483,
		"latbegin": 47.59675,
		"lonend": -122.33547,
		"latend": 47.59445
	},
	{
		"section": 165,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.7,
		"lonbegin": -122.33547,
		"latbegin": 47.59445,
		"lonend": -122.33648,
		"latend": 47.59196
	},
	{
		"section": 166,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.33648,
		"latbegin": 47.59196,
		"lonend": -122.3376,
		"latend": 47.58947
	},
	{
		"section": 167,
		"road": "SR99",
		"direction": "North",
		"length (m)": 293,
		"lonbegin": -122.3376,
		"latbegin": 47.58947,
		"lonend": -122.33912,
		"latend": 47.58708
	},
	{
		"section": 168,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33912,
		"latbegin": 47.58708,
		"lonend": -122.3395,
		"latend": 47.58453
	},
	{
		"section": 169,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.3395,
		"latbegin": 47.58453,
		"lonend": -122.33946,
		"latend": 47.58192
	},
	{
		"section": 170,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33946,
		"latbegin": 47.58192,
		"lonend": -122.33945,
		"latend": 47.57932
	},
	{
		"section": 171,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33945,
		"latbegin": 47.57932,
		"lonend": -122.33949,
		"latend": 47.57672
	},
	{
		"section": 172,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.33949,
		"latbegin": 47.57672,
		"lonend": -122.3395,
		"latend": 47.57411
	},
	{
		"section": 173,
		"road": "SR99",
		"direction": "North",
		"length (m)": 292.9,
		"lonbegin": -122.3395,
		"latbegin": 47.57411,
		"lonend": -122.33948,
		"latend": 47.57151
	},
	{
		"section": 120,
		"road": "SR99",
		"direction": "South",
		"length (m)": 298.2,
		"lonbegin": -122.34469,
		"latbegin": 47.6997,
		"lonend": -122.34459,
		"latend": 47.69706
	},
	{
		"section": 121,
		"road": "SR99",
		"direction": "South",
		"length (m)": 298.7,
		"lonbegin": -122.34459,
		"latbegin": 47.69706,
		"lonend": -122.34455,
		"latend": 47.69441
	},
	{
		"section": 122,
		"road": "SR99",
		"direction": "South",
		"length (m)": 298.7,
		"lonbegin": -122.34455,
		"latbegin": 47.69441,
		"lonend": -122.34452,
		"latend": 47.69175
	},
	{
		"section": 123,
		"road": "SR99",
		"direction": "South",
		"length (m)": 297.5,
		"lonbegin": -122.34452,
		"latbegin": 47.69175,
		"lonend": -122.34458,
		"latend": 47.68912
	},
	{
		"section": 124,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34458,
		"latbegin": 47.68912,
		"lonend": -122.34457,
		"latend": 47.68659
	},
	{
		"section": 125,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34457,
		"latbegin": 47.68659,
		"lonend": -122.34456,
		"latend": 47.68406
	},
	{
		"section": 126,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34456,
		"latbegin": 47.68406,
		"lonend": -122.34454,
		"latend": 47.68153
	},
	{
		"section": 127,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.4,
		"lonbegin": -122.34454,
		"latbegin": 47.68153,
		"lonend": -122.34552,
		"latend": 47.67913
	},
	{
		"section": 128,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.5,
		"lonbegin": -122.34552,
		"latbegin": 47.67913,
		"lonend": -122.3465,
		"latend": 47.67673
	},
	{
		"section": 129,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.3465,
		"latbegin": 47.67673,
		"lonend": -122.34728,
		"latend": 47.67427
	},
	{
		"section": 130,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34728,
		"latbegin": 47.67427,
		"lonend": -122.34731,
		"latend": 47.67174
	},
	{
		"section": 131,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34731,
		"latbegin": 47.67174,
		"lonend": -122.34732,
		"latend": 47.66921
	},
	{
		"section": 132,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34732,
		"latbegin": 47.66921,
		"lonend": -122.34736,
		"latend": 47.66668
	},
	{
		"section": 133,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34736,
		"latbegin": 47.66668,
		"lonend": -122.34741,
		"latend": 47.66416
	},
	{
		"section": 134,
		"road": "SR99",
		"direction": "South",
		"length (m)": 284.6,
		"lonbegin": -122.34741,
		"latbegin": 47.66416,
		"lonend": -122.34743,
		"latend": 47.66163
	},
	{
		"section": 135,
		"road": "SR99",
		"direction": "South",
		"length (m)": 250.8,
		"lonbegin": -122.34743,
		"latbegin": 47.66163,
		"lonend": -122.34743,
		"latend": 47.6594
	},
	{
		"section": 136,
		"road": "SR99",
		"direction": "South",
		"length (m)": 250.9,
		"lonbegin": -122.34743,
		"latbegin": 47.6594,
		"lonend": -122.34742,
		"latend": 47.65717
	},
	{
		"section": 137,
		"road": "SR99",
		"direction": "South",
		"length (m)": 250.9,
		"lonbegin": -122.34742,
		"latbegin": 47.65717,
		"lonend": -122.34738,
		"latend": 47.65494
	},
	{
		"section": 138,
		"road": "SR99",
		"direction": "South",
		"length (m)": 250.8,
		"lonbegin": -122.34738,
		"latbegin": 47.65494,
		"lonend": -122.34737,
		"latend": 47.65271
	},
	{
		"section": 139,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.6,
		"lonbegin": -122.34737,
		"latbegin": 47.65271,
		"lonend": -122.34741,
		"latend": 47.65011
	},
	{
		"section": 140,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34741,
		"latbegin": 47.65011,
		"lonend": -122.34747,
		"latend": 47.6475
	},
	{
		"section": 141,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34747,
		"latbegin": 47.6475,
		"lonend": -122.34746,
		"latend": 47.64489
	},
	{
		"section": 142,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34746,
		"latbegin": 47.64489,
		"lonend": -122.34704,
		"latend": 47.64231
	},
	{
		"section": 143,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34704,
		"latbegin": 47.64231,
		"lonend": -122.34601,
		"latend": 47.6398
	},
	{
		"section": 144,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.5,
		"lonbegin": -122.34601,
		"latbegin": 47.6398,
		"lonend": -122.34446,
		"latend": 47.63741
	},
	{
		"section": 145,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.3,
		"lonbegin": -122.34446,
		"latbegin": 47.63741,
		"lonend": -122.34354,
		"latend": 47.63493
	},
	{
		"section": 146,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34354,
		"latbegin": 47.63493,
		"lonend": -122.34357,
		"latend": 47.63232
	},
	{
		"section": 147,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34357,
		"latbegin": 47.63232,
		"lonend": -122.34359,
		"latend": 47.62971
	},
	{
		"section": 148,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34359,
		"latbegin": 47.62971,
		"lonend": -122.34366,
		"latend": 47.62711
	},
	{
		"section": 149,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293.4,
		"lonbegin": -122.34366,
		"latbegin": 47.62711,
		"lonend": -122.34378,
		"latend": 47.6245
	},
	{
		"section": 150,
		"road": "SR99",
		"direction": "South",
		"length (m)": 228.7,
		"lonbegin": -122.34378,
		"latbegin": 47.6245,
		"lonend": -122.34396,
		"latend": 47.62251
	},
	{
		"section": 151,
		"road": "SR99",
		"direction": "South",
		"length (m)": 228.8,
		"lonbegin": -122.34396,
		"latbegin": 47.62251,
		"lonend": -122.34377,
		"latend": 47.62049
	},
	{
		"section": 152,
		"road": "SR99",
		"direction": "South",
		"length (m)": 228.9,
		"lonbegin": -122.34377,
		"latbegin": 47.62049,
		"lonend": -122.34367,
		"latend": 47.61846
	},
	{
		"section": 153,
		"road": "SR99",
		"direction": "South",
		"length (m)": 229.7,
		"lonbegin": -122.34367,
		"latbegin": 47.61846,
		"lonend": -122.34467,
		"latend": 47.61664
	},
	{
		"section": 154,
		"road": "SR99",
		"direction": "South",
		"length (m)": 230.1,
		"lonbegin": -122.34467,
		"latbegin": 47.61664,
		"lonend": -122.34667,
		"latend": 47.61511
	},
	{
		"section": 155,
		"road": "SR99",
		"direction": "South",
		"length (m)": 229.8,
		"lonbegin": -122.34667,
		"latbegin": 47.61511,
		"lonend": -122.34788,
		"latend": 47.61335
	},
	{
		"section": 156,
		"road": "SR99",
		"direction": "South",
		"length (m)": 229.9,
		"lonbegin": -122.34788,
		"latbegin": 47.61335,
		"lonend": -122.3465,
		"latend": 47.61154
	},
	{
		"section": 157,
		"road": "SR99",
		"direction": "South",
		"length (m)": 270.7,
		"lonbegin": -122.3465,
		"latbegin": 47.61154,
		"lonend": -122.34414,
		"latend": 47.60975
	},
	{
		"section": 158,
		"road": "SR99",
		"direction": "South",
		"length (m)": 270.7,
		"lonbegin": -122.34414,
		"latbegin": 47.60975,
		"lonend": -122.34194,
		"latend": 47.60785
	},
	{
		"section": 159,
		"road": "SR99",
		"direction": "South",
		"length (m)": 270.6,
		"lonbegin": -122.34194,
		"latbegin": 47.60785,
		"lonend": -122.34003,
		"latend": 47.60583
	},
	{
		"section": 160,
		"road": "SR99",
		"direction": "South",
		"length (m)": 270.6,
		"lonbegin": -122.34003,
		"latbegin": 47.60583,
		"lonend": -122.33814,
		"latend": 47.60379
	},
	{
		"section": 161,
		"road": "SR99",
		"direction": "South",
		"length (m)": 270.6,
		"lonbegin": -122.33814,
		"latbegin": 47.60379,
		"lonend": -122.33627,
		"latend": 47.60174
	},
	{
		"section": 162,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.33627,
		"latbegin": 47.60174,
		"lonend": -122.33561,
		"latend": 47.59924
	},
	{
		"section": 163,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.33561,
		"latbegin": 47.59924,
		"lonend": -122.33483,
		"latend": 47.59675
	},
	{
		"section": 164,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.6,
		"lonbegin": -122.33483,
		"latbegin": 47.59675,
		"lonend": -122.33547,
		"latend": 47.59445
	},
	{
		"section": 165,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.7,
		"lonbegin": -122.33547,
		"latbegin": 47.59445,
		"lonend": -122.33648,
		"latend": 47.59196
	},
	{
		"section": 166,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293,
		"lonbegin": -122.33648,
		"latbegin": 47.59196,
		"lonend": -122.3376,
		"latend": 47.58947
	},
	{
		"section": 167,
		"road": "SR99",
		"direction": "South",
		"length (m)": 293,
		"lonbegin": -122.3376,
		"latbegin": 47.58947,
		"lonend": -122.33912,
		"latend": 47.58708
	},
	{
		"section": 168,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.33912,
		"latbegin": 47.58708,
		"lonend": -122.3395,
		"latend": 47.58453
	},
	{
		"section": 169,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.3395,
		"latbegin": 47.58453,
		"lonend": -122.33946,
		"latend": 47.58192
	},
	{
		"section": 170,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.33946,
		"latbegin": 47.58192,
		"lonend": -122.33945,
		"latend": 47.57932
	},
	{
		"section": 171,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.33945,
		"latbegin": 47.57932,
		"lonend": -122.33949,
		"latend": 47.57672
	},
	{
		"section": 172,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.33949,
		"latbegin": 47.57672,
		"lonend": -122.3395,
		"latend": 47.57411
	},
	{
		"section": 173,
		"road": "SR99",
		"direction": "South",
		"length (m)": 292.9,
		"lonbegin": -122.3395,
		"latbegin": 47.57411,
		"lonend": -122.33948,
		"latend": 47.57151
	}
]

};
var count = 0;
var loopCount = 191; // 575 records - 1400 mins in a day
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
								for(var j = 0 ; j< loopCount ; j++){
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
		const timestamp = Date.now();
		const loopLength = 1000; // was 1800 changed this to 1000  so that the light is lit faster
		const loopTime = 30000; // ash - the number of times a loop keeps animating in a section
		this.setState({
			time: (timestamp % loopTime) / loopTime * loopLength,
		});
		this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));
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
				mapboxApiAccessToken={MAPBOX_TOKEN}
			>
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
