const { Service } = require('feathers-mongoose');
const createMethod = require('./methods/createMethod');

exports.Tracks = class Tracks extends Service {

  async create(data) {
    return await createMethod(data);
  }
};
