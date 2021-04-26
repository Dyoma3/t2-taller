const mongoose = require('mongoose');

module.exports = async data => {
  const { trackId: id } = data;
  const tracksModel = mongoose.models.tracks;
  const trackExists = await tracksModel.exists({ id });
  if (!trackExists) {
    return 'No Track';
  }
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(async () => {
      const { times_played } = await tracksModel.findOne(
        { id },
        { times_played: 1 },
        { session }
      );
      await tracksModel.updateOne(
        { id },
        { times_played: times_played + 1 },
        { session },
      );
    });
  } finally {
    session.endSession();
  }
  return {};
};
