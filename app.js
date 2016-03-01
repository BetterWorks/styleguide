'use strict';

var styleGuide = angular.module('bwStyleGuide', [
	'ngRoute',
	'ngAnimate',
]);

styleGuide.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		title      : 'BetterWorks',
		templateUrl: 'pages/intro.html'
	})
	.when('/grid', {
		title      : 'Grid',
		templateUrl: 'pages/grid.html'
	})
	.when('/typography', {
		title      : 'Typography',
		templateUrl: 'pages/typography.html'
	})
	.when('/buttons', {
		title      : 'Buttons & Links',
		templateUrl: 'pages/buttonsProgressBars.html'
	})
	.when('/forms', {
		title      : 'Forms',
		templateUrl: 'pages/formElements.html'
	})
	.when('/colors', {
		title      : 'Colors',
		templateUrl: 'pages/colors.html'
	})
});


styleGuide.directive('prettyprint', function() {
  return {
    restrict: 'C',
    link: function postLink(scope, element) {
      scope.$on('$viewContentLoaded', function(){
        element.html(prettyPrintOne(element.html(),'',true));
      });
    }
  };
});

styleGuide.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    console.log(arguments);
      if (current.hasOwnProperty('$$route'))
        $rootScope.title = current.$$route.title;
  });
}]);
