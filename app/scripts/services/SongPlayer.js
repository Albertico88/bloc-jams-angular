(function() {
  function SongPlayer() {
    var SongPlayer = {};

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
/**
* PLAY Method (public)
* @method SongPlayer.play
* @desc sets correct song and plays it via the playSong function, plays song if song is paused.
* @param { Object } song
*/
    SongPlayer.play = function(song) {
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
* PAUSE Method (public)
* @method SongPlayer.pause
* @desc pauses the song
* @param { Object } song
*/
    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
