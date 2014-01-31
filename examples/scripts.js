(function(window, angular) {
	
	var app = angular.module('minChartExample', ['minChart']);
	
	app.controller('AppCtrl', function($scope) {
		$scope.data = [12, 23, 43, 47];
	});
})(window, angular);