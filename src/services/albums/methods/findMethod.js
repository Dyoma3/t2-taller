const mongoose = require('mongoose');

module.exports = async params => {
  const query = {};
  if (params.query.artistId) {
    query.artist_id = params.query.artistId;
    const artistsModel = mongoose.models.artists;
    const artistExists = await artistsModel.exists({ id: params.query.artistId });
    if (!artistExists) {
      return 'No Artist';
    }
  }
  const albumsModel = mongoose.models.albums;
  return await albumsModel.find(query, {
    _id: 0,
    id: 1,
    name: 1,
    genre: 1,
    artist_id: 1,
    artist: 1,
    tracks: 1,
    self: 1,
  });
};
