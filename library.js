function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  playlists = [];
}

function Playlist(name) {
  this.name = name,
  tracks = [],
  overallRating = function() {
    const trackRatings = tracks.map((track) => {
      return track.rating;
    });
    const totalRating = trackRatings.reduce((sum, rating) => {
      return sum + rating;
    }, 0);
    return totalRating / trackRatings.length;
  },
  totalDuration = function() {
    return tracks.reduce((sum, duration) => {
      return sum + duration;
    }, 0);
  };
}

function Track(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length;
}