const mongoose = require('mongoose');

module.exports = async data => {
  const { artistId } = data;
  const artistsModel = mongoose.models.artists;
  const artistExists = await artistsModel.exists({ id: artistId });
  if (!artistExists) {
    return 'No Artist';
  }
  const tracksModel = mongoose.models.tracks;
  await tracksModel.updateMany({ artist_id: artistId }, { $inc: { times_played: 1 } });
  return {};
};
