const mongoose = require('mongoose');

module.exports = async id => {
  const tracksModel = mongoose.models.tracks;
  return await tracksModel.findOne({ id }, {
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
