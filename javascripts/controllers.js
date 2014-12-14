var styleguideControllers = angular.module('styleguideControllers', []);

styleguideControllers.controller('mainController', function($scope, $location) {

});

styleguideControllers.controller('gridController', function($scope, $location) {
	$("html, body").animate({
            scrollTop: 0
		}, 1);
	$scope.toggle = true;
});

styleguideControllers.controller('typographyController', function($scope, $location) {
	$("html, body").animate({
            scrollTop: 0
		}, 1);
	$scope.toggle = true;
});

styleguideControllers.controller('buttonsProgressBarsController', function($scope, $location) {
	$("html, body").animate({
            scrollTop: 0
		}, 1);
		$scope.toggle = true;
});

styleguideControllers.controller('formElementsController', function($scope, $location) {
	$("html, body").animate({
            scrollTop: 0
		}, 1);
		$scope.toggle = true;
});

styleguideControllers.controller('colorsController', function($scope, $location) {
	$("html, body").animate({
            scrollTop: 0
		}, 1);
		$scope.toggle = true;
});

styleguideControllers.controller('dashboardModulesController', function($scope, $location) {
	$("html, body").animate({
            scrollTop: 0
		}, 1);
		$scope.toggle = true;
});

styleguideControllers.controller('feedItemsController', function($scope, $location) {
	$("html, body").animate({
            scrollTop: 0
		}, 1);
		$scope.toggle = true;
});



styleguideControllers.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };        
}]);