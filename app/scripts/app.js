// angular.module('blocJams', ['ui.router']);
(function() {
  function config($stateProvider, $locationProvider) {
// $stateProvider creates a new application state, we will need 4: name, URL route, controller, and template.
// $locationProvider configures apps deep linking paths

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

// $stateProvider.state(stateName, stateConfig)
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url: '/album',
        templateUrl: '/templates/album.html'
      });
  }

  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
