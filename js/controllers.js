/* Controllers */

function CategoryListCtrl($scope, Categories) {
	$scope.categories = Categories.query();
}

function CategoryDetailCtrl($scope, $routeParams, Category) {

}

function ArticleDetailCtrl($scope, $routeParams, Article) {

}