(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider // configures app paths
      .html5Mode({
        enabled: true,  // Disables Hashbang #! prefixes in url
        requireBase: false  // setting this to false fixes $location error
      });

    $stateProvider
      .state('landing', {
          url: '/', // address bar url name
          controller: 'LandingCtrl as landing',
          templateUrl: '/templates/landing.html'
         })
      .state('collection', {
        url: '/collection',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
      })
      .state('contact', {
        url: '/contact',
        controller: 'ContactCtrl as contact',
        templateUrl: '/templates/contact.html'
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
