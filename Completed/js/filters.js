/* Filters */
var appFilters = angular.module('helpAtricleFilters', []);

appFilters.filter('url', function() {
	return function(input) {
		return input.replace(' ', '-');
	};
});
