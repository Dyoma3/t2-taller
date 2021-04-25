const mongoose = require('mongoose');

module.exports = async (id) => {
  const artistsModel = mongoose.models.artists;
  return await artistsModel.findOne({ id });
};
