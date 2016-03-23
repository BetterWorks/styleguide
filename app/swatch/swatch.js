angular.module('bwStyleGuide').directive('swatch', ['$window', '$timeout',
function($window, $timeout)
{
  return {
    restrict: 'A',
    priority: 1,
    link    : function(scope, element, attrs)
    {
      if (attrs.swatch.length > 0)
      {
        if (attrs.swatch[0] == '#')
          element.css('background-color', attrs.swatch);
        else
          element.addClass(attrs.swatch);
      }

      if (attrs.tooltip)
      {
        scope.$evalAsync(function()
        {
          element.addClass('tooltip-monospace');

          var bgColor = $window.getComputedStyle(element[0]).backgroundColor;
          var components = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
          if (components)
          {
            var outColor = '#' + ('00000' + (
              (parseInt(components[1]) << 16) +
              (parseInt(components[2]) << 8) +
              parseInt(components[3])
            ).toString(16)).slice(-6);

            element.attr('tooltip', element.attr('tooltip') + ': ' + outColor);
          }
        });
      }
    }
  };
}]);
