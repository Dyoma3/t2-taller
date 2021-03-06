const mongoose = require('mongoose');

module.exports = async data => {
  const { albumId, name, duration } = data;
  if (
    typeof albumId !== 'string'
    || typeof name !== 'string'
    || typeof duration !== 'number'
  ) {
    return 'Invalid Input';
  }

  const albumsModel = mongoose.models.albums;
  // verify if album exists
  const albumExists = await albumsModel.exists({ id: albumId });
  if (!albumExists) {
    return 'No Album';
  }

  const { artist_id: artistId } = await albumsModel.findOne({ id: albumId });

  const id = Buffer.from(`${name}:${albumId}`).toString('base64').substring(0, 22);
  const artist = `https://${process.env.HOST}/artists/${artistId}`;
  const self = `https://${process.env.HOST}/tracks/${id}`;
  const album = `https://${process.env.HOST}/albums/${albumId}`;

  const tracksModel = mongoose.models.tracks;
  // verify if track exists
  const trackExists = await tracksModel.findOne({ id }, {
    _id: 0,
    id: 1,
    album_id: 1,
    name: 1,
    duration: 1,
    times_played: 1,
    artist: 1,
    album: 1,
    self: 1,
  });
  if (trackExists) {
    return { message: 'Already Exists', data: trackExists };
  }

  await tracksModel.create({
    id,
    name,
    duration,
    times_played: 0,
    album_id: albumId,
    artist_id: artistId,
    artist,
    album,
    self,
  });

  return { id, album_id: albumId, name, duration, times_played: 0, artist, album, self };

};
