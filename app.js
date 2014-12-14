'use strict';

var styleGuide = angular.module('styleGuide', [
	'ngRoute', 
	'ngAnimate', 
	'styleguideControllers',
	'ngLoadScript'
]);

styleGuide.config(function($routeProvider) {
	$routeProvider
	
	// route for the home page
	.when('/', {
		title : 'BetterWorks',
		templateUrl : 'pages/home.html',
		controller  : 'mainController'
	})
	
	// route for the grid page
	.when('/grid', {
		title : 'Grid',
		templateUrl : 'pages/grid.html',
		controller  : 'gridController'
	})
	
	// route for the typography page
	.when('/typography', {
		title : 'Typography',
		templateUrl : 'pages/typography.html',
		controller  : 'typographyController'
	})
	
	// route for the buttons and progress page
	.when('/buttonsProgressBars', {
		title : 'Buttons & Progress Bars',
		templateUrl : 'pages/buttonsProgressBars.html',
		controller  : 'buttonsProgressBarsController'
	})
	
	// route for the form elements page
	.when('/formElements', {
		title : 'Form Elements',
		templateUrl : 'pages/formElements.html',
		controller  : 'formElementsController'
	})
	
	// route for the colors page
	.when('/colors', {
		title : 'Colors',
		templateUrl : 'pages/colors.html',
		controller  : 'colorsController'
	})
	
	// route for the dashboard modules page
	.when('/dashboardModules', {
		title : 'Dashboard Modules',
		templateUrl : 'pages/dashboardModules.html',
		controller  : 'dashboardModulesController'
	})
	
	// route for the feed items page
	.when('/feedItems', {
		title : 'Feed Items',
		templateUrl : 'pages/feedItems.html',
		controller  : 'feedItemsController'
	});
	
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
        if (current.hasOwnProperty('$$route')) {
            $rootScope.title = current.$$route.title;
        }
    });
}]);

