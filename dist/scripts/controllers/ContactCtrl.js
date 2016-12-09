(function() {
  function ContactCtrl() {
    this.number = '(787) 123-4567';
    this.email = 'hello@blocjams.com';
  }

  angular
    .module('blocJams')
    .controller('ContactCtrl', ContactCtrl);
})();
