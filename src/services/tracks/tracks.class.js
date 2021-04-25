const { Service } = require('feathers-mongoose');
const createMethod = require('./methods/createMethod');
const findMethod = require('./methods/findMethod');
const getMethod = require('./methods/getMethod');
const removeMethod = require('./methods/removeMethod');

exports.Tracks = class Tracks extends Service {

  async create(data) {
    return await createMethod(data);
  }

  async find(params) {
    return await findMethod(params);
  }

  async get(id) {
    return await getMethod(id);
  }

  async remove(id) {
    return await removeMethod(id);
  }
  
};
