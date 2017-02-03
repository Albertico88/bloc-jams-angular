(function() {
  function seekBar() {
    return {
      templateUrl: 'templates/directives/seek_bar.html',
      replace: true,
      // replace: true instructs Angular to completely replace the <seek-bar> element with the directive's HTML template rather than insert the HTML between the  <seek-bar></seek-bar> tags.
      restrict: 'E',
      // restrict 'E' instructs Angular to treat this directive as an element. For example, Angular will run the code if it finds <seek-bar> in the HTML, but not if it finds  <div seek-bar>.
      scope: { },
      // Declaring an empty scope property ensures that a new scope will exist solely for the directive (referred to as isolate-scope). An isolate-scope allows us to bind functions from the directive's view to its scope.
      link: function(scope, element, attributes) {
        // directive logic to return
      }
      /*  The link function is automatically generated and scoped to the element defining the directive. Think of it as a function that executes when the directive is instantiated in the view. This is where all logic related to DOM manipulation will go.
        1) The link method's first argument is its scope object. Attributes and methods on the scope object are accessible within the directive's view.
        2) The second argument is the jqLite-wrapped element that the directive matches.
        3) The third argument is a hash of attributes with which the directive was declared. If we declare <seek-bar> with no attributes in the HTML, then this hash will be empty.
      */
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', seekBar)
})();
