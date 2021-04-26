const mongoose = require('mongoose');

module.exports = async id => {
  const albumsModel = mongoose.models.albums;
  return await albumsModel.findOne({ id }, {
    _id: 0,
    id: 1,
    artist_id: 1,
    name: 1,
    genre: 1,
    artist: 1,
    tracks: 1,
    self: 1,
  });
};
