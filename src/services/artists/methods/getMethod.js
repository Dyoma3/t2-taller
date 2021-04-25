const mongoose = require('mongoose');

module.exports = async (id) => {
  const artistsModel = mongoose.models.artists;
  return await artistsModel.findOne({ id }, {
    _id: 0,
    id: 1,
    name: 1,
    age: 1,
    albums: 1,
    tracks: 1,
    self: 1,
  });
};
