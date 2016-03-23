angular.module('bwStyleGuide').run(['$compile', '$document', function($compile, $document)
{
  var $tooltip = angular.element('<tooltip>');

  function PositionTooltip(Element)
  {
    var bounds = Element.getBoundingClientRect();
    var left = bounds.left + window.pageXOffset;
    var top = bounds.top + window.pageYOffset - 10;

    left += (bounds.right - bounds.left) / 2;

    // var tooltipBounds  = $tooltip[0].getBoundingClientRect();
    // top -= 10 + (tooltipBounds.bottom - tooltipBounds.top);

    $tooltip.css({ top: top + 'px', left: left + 'px' });
    $document.find('body').append($tooltip);
  }

  $document.on('mouseover', function(event)
  {
    if (event.target.hasAttribute('tooltip'))
    {
      $tooltip.text(event.target.getAttribute('tooltip'));
      PositionTooltip(event.target);
    }
    else if (event.target.hasAttribute('tooltip-html'))
    {
      $tooltip.html(event.target.getAttribute('tooltip-html'));
      PositionTooltip(event.target);
    }
  });
  $document.on('mouseout', function()
  {
    $tooltip.detach();
  });
}]);
