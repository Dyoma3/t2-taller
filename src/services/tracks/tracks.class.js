const { Service } = require('feathers-mongoose');
const createMethod = require('./methods/createMethod');
const findMethod = require('./methods/findMethod');

exports.Tracks = class Tracks extends Service {

  async create(data) {
    return await createMethod(data);
  }

  async find(params) {
    return await findMethod(params);
  }


};
