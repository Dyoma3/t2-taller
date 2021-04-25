const mongoose = require('mongoose');

module.exports = async id => {
  const albumsModel = mongoose.models.albums;
  const albumExists = await albumsModel.exists({ id });
  if (!albumExists) {
    return 'No Album';
  }

  const session = await mongoose.startSession();
  const tracksModel = mongoose.models.tracks;
  try {
    await session.withTransaction( async () => {
      await albumsModel.deleteOne({ id }, { session });
      await tracksModel.deleteMany({ album_id: id }, { session });
    });

  } finally {
    session.endSession();
  }
  return {};


};
