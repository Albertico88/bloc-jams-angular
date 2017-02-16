(function() {
  function SongPlayer($rootScope, Fixtures) {
    var SongPlayer = {};

// injected Fixtures Service to use it's getAlbum function, which returns the Picasso Album.
    var currentAlbum = Fixtures.getAlbum();

// function returns index of the selected song
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };
/**
* @desc Buzz Object audio file
* @type { Object }
*/
    var currentBuzzObject = null;
/**
* SETSONG Function (private)
* @function setSong
* @desc Stops currently playing song and loads new audio files as currentBuzzObject
* @param { Object } song
*/
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      // added $rootScope.$apply to update song's playback progress from anywhere.
      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
          SongPlayer.currentTime = currentBuzzObject.getTime();
        });
      });

      SongPlayer.currentSong = song;
    };

/**
* PLAYSONG Function (private)
* @function playSong
* @desc plays the selected song
* @param { Object } song
*/
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };


// ---------- PUBLIC --------------


    SongPlayer.currentSong = null;

    // Current playback time (in seconds) of currently playing song.
    SongPlayer.currentTime = null;

    SongPlayer.volume = 50;

/**
* PLAY Method
* @method SongPlayer.play
* @desc sets correct song and plays it via the playSong function, plays song if song is paused.
* @param { Object } song
*/
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);

      } else if (SongPlayer.currentSong === song) {
          if (currentBuzzObject.isPaused()) {
            playSong(song);
          }
      }
    };

/**
* PAUSE Method
* @method SongPlayer.pause
* @desc pauses the song
* @param { Object } song
*/
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

// PREVIOUS Method: selects the song previous to the currently playing song.
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex --;

      if (currentSongIndex < 0) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;

      } else {

        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

// NEXT Method: skips to the following song.
    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex ++;

      var lastSong = currentAlbum.songs.length - 1;

      if (currentSongIndex > lastSong) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;

      } else {

        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

// setCurrentTime method: sets the current time (in seconds) of currently playing song
    SongPlayer.setCurrentTime = function(time) {
      if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
      }
    };

// setVolume: Sets song volume (defaults to 80%)
    SongPlayer.setVolume = function(volume){
      if (currentBuzzObject) {
        currentBuzzObject.setVolume(volume);
    }
      SongPlayer.volume = volume;
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
