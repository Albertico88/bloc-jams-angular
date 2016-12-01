(function() {
  function config($stateProvider, $locationProvider) {
// $stateProvider creates a new application state, we will need 4: name, URL route, controller, and template.
// $locationProvider configures apps deep linking paths

    $locationProvider // configures app paths
      .html5Mode({
        enabled: true,  // Disables Hashbang #! prefixes in url
        requireBase: false // setting this to false fixes $location error
      });

    $stateProvider
    // .state(stateName, stateConfig)
      .state('landing', {
        url: '/',
        templateUrl: '/templates/landing.html'
      })
      .state('collection', {
        url: '/collection',
        templateUrl: '/templates/collection.html'
      })
      .state('album', {
        url: '/album',
        templateUrl: '/templates/album.html'
      });
  }

// angular.module('blocJams', ['ui.router']);
  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
