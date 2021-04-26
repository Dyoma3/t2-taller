const mongoose = require('mongoose');

module.exports = async data => {
  const { albumId } = data;
  const albumsModel = mongoose.models.albums;
  const albumExists = await albumsModel.exists({ id: albumId });
  if (!albumExists) {
    return 'No Album';
  }
  const tracksModel = mongoose.models.tracks;
  await tracksModel.updateMany({ album_id: albumId }, { $inc: { times_played: 1 } });
  return {};

};
