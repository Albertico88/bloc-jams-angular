(function() {
  function AlbumCtrl() {
    this.albumData = {
      title: 'Colors',
      artist: 'Pablo Picasso',
      lable: 'Cubism Records',
      year: '1881',
      albumArtUrl: '/assets/images/17.png',
      songs: [
        { title: 'Blue', duration: 161.71, audioURl: 'assets/music/blue' },
        { title: 'Green', duration: 103.96, audioURl: 'assets/music/green' },
        { title: 'Red', duration: 268.45, audioURl: 'assets/music/red' },
        { title: 'Pink', duration: 153.14, audioURl: 'assets/music/pink' },
        { title: 'Magenta', duration: 374.22, audioURl: 'assets/music/magenta' }
      ]
    };
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
