function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = [];
}

function Playlist(name) {
  this.name = name,
  this.tracks = [],
  this.overallRating = function() {
    const trackRatings = this.tracks.map((track) => {
      return track.rating;
    });
    const totalRating = trackRatings.reduce((sum, rating) => {
      return sum + rating;
    }, 0);
    return totalRating / trackRatings.length;
  },
  this.totalDuration = function() {
    const durations = this.tracks.map((track) => {
      return track.length;
    });
    return durations.reduce((sum, duration) => {
      return sum + duration;
    }, 0);
  };
}

function Track(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length;
}

////////////////
/////        ///
//// Tracks ////
///        /////
////////////////
const trackOne = new Track("Here Comes the Sun", 4, 240);
const trackTwo = new Track("Hey Jude", 3, 180);
const trackThree = new Track("Revolver", 2, 210);
const trackFour = new Track("Revolution", 5, 150);
const trackFive = new Track("Octopuses Garden", 1, 180);
const trackSix = new Track("Strawberry Fields", 3, 201);

///////////////////
/////           ///
//// Playlists ////
///           /////
///////////////////
const playlistOne = new Playlist("Da Beatles");
const playlistTwo = new Playlist("Worst Beatles Songs");
const playlistThree = new Playlist("Best Beatles Songs");

// playlist tracks
playlistOne.tracks.push(trackOne, trackTwo, trackThree, trackFour, trackFive, trackSix);
playlistTwo.tracks.push(trackThree, trackFive);
playlistThree.tracks.push(trackOne, trackFour);

/////////////////
/////         ///
//// Library ////
///         /////
/////////////////
const library = new Library("Best Library", "Cool Guy");

library.playlists.push(playlistOne, playlistTwo, playlistThree);

