const { Service } = require('feathers-mongoose');
const findMethod = require('./methods/findMethod');
const getMethod = require('./methods/getMethod');
const createMethod = require('./methods/createMethod');
const removeMethod = require('./methods/removeMethod');
const updateMethod = require('./methods/updateMethod');

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

  async remove(id) {
    return await removeMethod(id);
  }
  
  async update(id, data) {
    return await updateMethod(data);
  }

};
