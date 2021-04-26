const mongoose = require('mongoose');

module.exports = async (data) => {
  const { name, age } = data;
  if (typeof name !== 'string' || typeof age !== 'number') {
    return 'Invalid Input';
  }
  // eslint-disable-next-line no-undef
  const id = Buffer.from(name).toString('base64').substring(0, 22);
  const albums = `${process.env.HOST}/artists/${id}/albums`;
  const tracks = `${process.env.HOST}/artists/${id}/tracks`;
  const self = `${process.env.HOST}/artists/${id}`;

  const artistsModel = mongoose.models.artists;
  // verify it doesnt exist already
  const alreadyExists = await artistsModel.findOne({ id } , {
    _id: 0,
    id: 1,
    name: 1,
    age: 1,
    albums: 1,
    tracks: 1,
    self: 1,
  });
  if (alreadyExists) {
    return { message: 'Already Exists', data: alreadyExists };
  }

  await artistsModel.create({
    id,
    name,
    age,
    albums,
    tracks,
    self,
  });
  return { id, name, age, albums, tracks, self };

};
