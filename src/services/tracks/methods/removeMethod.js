const mongoose = require('mongoose');

module.exports = async id => {
  const tracksModel = mongoose.models.tracks;  
  return await tracksModel.deleteOne({ id });
};
