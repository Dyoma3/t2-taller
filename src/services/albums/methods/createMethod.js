const mongoose = require('mongoose');

module.exports = async data => {
  const { artistId, name, genre } = data;
  if (typeof name !== 'string' || typeof genre !== 'string') {
    return 'Invalid Input';
  }
  const id = Buffer.from(`${name}:${artistId}`).toString('base64').substring(0, 22);
  const artist = `${process.env.HOST}/artists/${artistId}`;
  const tracks = `${process.env.HOST}/albums/${id}/tracks`;
  const self = `${process.env.HOST}/albums/${id}`;

  const albumsModel = mongoose.models.albums;
  // verify it doesnt exist already
  const alreadyExists = await albumsModel.exists({ id });
  if (alreadyExists) {
    return 'Already Exists';
  }
  const artistsModel = mongoose.models.artists;
  const artistExists = await artistsModel.exists({ id: artistId });
  if (!artistExists) {
    return 'No Artist';
  }

  await albumsModel.create({
    id,
    name,
    genre,
    artistId,
    artist,
    tracks,
    self,
  });
  return { id, artist_id: artistId, name, genre, artist, tracks, self };
};
