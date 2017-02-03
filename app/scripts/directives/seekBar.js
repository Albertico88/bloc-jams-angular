(function() {
  function seekBar() {
    return {
      templateUrl: 'templates/directives/seek_bar.html',
      replace: true,
      // replace: true instructs Angular to completely replace the <seek-bar> element with the directive's HTML template rather than insert the HTML between the  <seek-bar></seek-bar> tags.
      restrict: 'E',
      // restrict 'E' instructs Angular to treat this directive as an element. For example, Angular will run the code if it finds <seek-bar> in the HTML, but not if it finds  <div seek-bar>.
      scope: { }, // specifies that a new scope be created for the directive.
      link: function(scope, element, attributes) {
        // directive logic to return
      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', seekBar)
})();
