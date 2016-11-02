'use strict';

var styleGuide = angular.module('bwStyleGuide', [
	'ngRoute',
	'ngAnimate',
]);

styleGuide.config(function ($routeProvider)
{
	$routeProvider
	.when('/',
	{
		title      : 'BetterWorks',
		templateUrl: 'pages/intro.html'
	})
	.when('/grid',
	{
		title      : 'Grid',
		templateUrl: 'pages/grid.html'
	})
	.when('/typography',
	{
		title      : 'Typography',
		templateUrl: 'pages/typography.html'
	})
	.when('/buttons',
	{
		title      : 'Buttons & Links',
		templateUrl: 'pages/buttons.html'
	})
	.when('/forms',
	{
		title      : 'Forms',
		templateUrl: 'pages/forms.html'
	})
	.when('/colors',
	{
		title      : 'Colors',
		templateUrl: 'pages/colors.html'
	})
	.otherwise({ redirectTo: '/' });
});

styleGuide.directive('prettyprint', function()
{
  return {
    restrict: 'C',
    link: function (scope, element)
		{
      scope.$on('$viewContentLoaded', function()
			{
        element.html(prettyPrintOne(element.html(), '', true));
      });
    }
  };
});

styleGuide.run(['$location', '$rootScope', function($location, $rootScope)
{
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous)
	{
    if (current.hasOwnProperty('$$route'))
		{
      $rootScope.pageTitle = current.$$route.title;
			$rootScope.pagePath  = current.$$route.originalPath.substr(1);
		}
  });
}]);
