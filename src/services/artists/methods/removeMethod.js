const mongoose = require('mongoose');

module.exports = async id => {
  const artistsModel = mongoose.models.artists;
  const artistExists = await artistsModel.exists({ id });
  if (!artistExists) {
    return 'No Artist';
  }
  const albumsModel = mongoose.models.albums;
  const tracksModel = mongoose.models.tracks;
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      await artistsModel.deleteOne({ id }, { session });
      await albumsModel.deleteMany({ artist_id: id }, { session });
      await tracksModel.deleteMany({ artist_id: id }, { session });
    });
  } finally {
    session.endSession();
  }
  return {};
};
