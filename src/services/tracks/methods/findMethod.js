const mongoose = require('mongoose');

module.exports = async params => {
  const query = {};
  if (params.query.artistId) {
    const artistsModel = mongoose.models.artists;
    const artistExists = await artistsModel.exists({ id: params.query.artistId });
    if (!artistExists) {
      return 'No Artist';
    }
    query.artist_id = params.query.artistId;
  } else if (params.query.albumId) {
    const albumsModel = mongoose.models.albums;
    const albumExists = await albumsModel.exists({ id: params.query.albumId });
    if (!albumExists) {
      return 'No Album';
    }
    query.album_id = params.query.albumId;
  }
  
  const tracksModel = mongoose.models.tracks;
  return await tracksModel.find(query, {
    _id: 0,
    id: 1,
    album_id: 1,
    name: 1,
    duration: 1,
    times_played: 1,
    artist: 1,
    album: 1,
    self: 1,
  });

};
