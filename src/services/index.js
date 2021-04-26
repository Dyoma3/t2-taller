const artists = require('./artists/artists.service.js');
const albums = require('./albums/albums.service.js');
const tracks = require('./tracks/tracks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(artists);
  app.configure(albums);
  app.configure(tracks);
};
