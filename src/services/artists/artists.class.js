const { Service } = require('feathers-mongoose');
const findMethod = require('./methods/findMethod');
const getMethod = require('./methods/getMethod');
const createMethod = require('./methods/createMethod');

exports.Artists = class Artists extends Service {

  async find() {
    return await findMethod();
  }
  
  async get(id) {
    return await getMethod(id);
  }

  async create(data) {
    return await createMethod(data);
  }
};
