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
				data: '='
			},
			restrict: 'E',
			template: '<div class="clearfix mc-chart mc-pie"><div class="mc-sections"><div class="sect" data-start="0" data-value="30"></div>' +
				'<div class="sect highlight" data-start="30" data-value="30"></div>' +
				'<div class="sect" data-start="60" data-value="40"></div>' +
				'<div class="sect big" data-start="100" data-value="260"></div></div>',
			link: {
				pre: function(scope, elm, attrs) {
					
				}
			}
		};
	});
})(window, angular);
