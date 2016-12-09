(function() {
  function LandingCtrl() {
    this.heroTitle = "Turn the Music Up!";
  // Using the this keyword adds heroTitle as a property on the LandingCtrl's  $scope object. 
  }

  angular
    .module('blocJams')
    .controller('LandingCtrl', LandingCtrl);
    // .controller(1, 2)
    //    1 = Name of the Controller.
    //    2 = A callback function OR an array that injects dependencies, with a callback function as the LAST item in the array.
})();
