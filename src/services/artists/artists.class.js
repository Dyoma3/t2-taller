const { Service } = require('feathers-mongoose');
const findMethod = require('./methods/findMethod');
const getMethod = require('./methods/getMethod');

exports.Artists = class Artists extends Service {

  async find() {
    return await findMethod();
  }
  
  async get(id) {
    return await getMethod(id);
  }
};
