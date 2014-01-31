/**
* minCharts - a minimalist charting library for AngularJS
* @version v0.1.0
* @license MIT License, http://www.opensource.org/licenses/MIT
*/

(function(window, angular) {
	'use strict';
	
	var minChart = angular.module('minChart', []);
	
	minChart.directive("mcPie", function() {
		return {
			scope: {
				data: '=mcData'
			},
			restrict: 'E',
			template: '<div><pre>{{data | json}}</pre> mcPie initializted</div>'
		};
	});
})(window, angular);
