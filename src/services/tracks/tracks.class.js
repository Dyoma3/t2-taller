const { Service } = require('feathers-mongoose');
const createMethod = require('./methods/createMethod');
const findMethod = require('./methods/findMethod');
const getMethod = require('./methods/getMethod');
const removeMethod = require('./methods/removeMethod');
const updateMethod = require('./methods/updateMethod');

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

  async update(id, data) {
    return await updateMethod(data);
  }
  
};
