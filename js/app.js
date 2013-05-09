/* App Module */
angular.module('helparticles', ['helpArticleServices']).
config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: CategoryListCtrl
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);