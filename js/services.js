/* Services */
var appServices = angular.module('helpArticleServices', ['ngResource']);

appServices.factory('Categories', function ($resource) {
    return $resource('json/categories.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
});

appServices.factory('Category', function ($resource) {
    return $resource('json/:categoryText.json', {}, {
    	get: {method:'GET', isArray:false}
  	});
});

appServices.factory('Article', function ($resource) {
    return $resource('json/articles/:articleText.json', {}, {
    	get: {method:'GET', isArray:false}
  	});
});