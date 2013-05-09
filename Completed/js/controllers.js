/* Controllers */

function CategoryListCtrl($scope, Categories) {
	//pass categories into controllers scope
    $scope.categories = Categories.query();
}

function CategoryDetailCtrl($scope, $routeParams, Category) {
    var catText = $routeParams.categoryText.toLowerCase();
    $scope.category = Category.get({
       categoryText: catText
    }, function (category) {
    });
 
}

function ArticleDetailCtrl($scope, $routeParams, Article) {
    var artText = $routeParams.articleText.toLowerCase();
    $scope.article = Article.get({
       articleText: artText
    }, function (article) {
    	console.log(article);
    });
}