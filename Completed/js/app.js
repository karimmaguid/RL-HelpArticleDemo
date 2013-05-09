/* App Module */
angular.module('helparticles', ['helpArticleServices']).
config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: CategoryListCtrl
        }).
        when('/category/:categoryText', {
            templateUrl: 'templates/category.html',
            controller: CategoryDetailCtrl
        }).
        when('/article/:articleText', {
            templateUrl: 'templates/article.html',
            controller: ArticleDetailCtrl
        }). 
        otherwise({
            redirectTo: '/home'
        });
    }
]);