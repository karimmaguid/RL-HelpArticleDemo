/* Controllers */

function CategoryListCtrl($scope, $location, Categories) {
	//pass categories into controllers scope
    $scope.categories = Categories.query();
}

function CategoryDetailCtrl($scope, $routeParams, Category) {
    $scope.category = Category.get({
       categoryText: $routeParams.categoryText
    }, function (category) {
    });
 
}

function ArticleDetailCtrl($scope, $routeParams, Article) {
    $scope.article = Article.get({
       articleText: $routeParams.articleText
    }, function (article) {
    	console.log(article);
    });
}