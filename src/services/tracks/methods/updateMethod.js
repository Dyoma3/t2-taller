const mongoose = require('mongoose');

module.exports = async data => {
  const { trackId: id } = data;
  const tracksModel = mongoose.models.tracks;
  const trackExists = await tracksModel.exists({ id });
  if (!trackExists) {
    return 'No Track';
  }
  await tracksModel.updateOne({ id }, { $inc: { times_played: 1 } });
  return {};
};
