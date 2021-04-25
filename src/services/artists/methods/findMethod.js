const mongoose = require('mongoose');

module.exports = async () => {
  const artistsModel = mongoose.models.artists;
  return await artistsModel.find({}, {
    customId: 1,
    name: 1,
    age: 1,
    albums: 1,
    tracks: 1,
    self: 1,
  });

};
