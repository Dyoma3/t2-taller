const { Service } = require('feathers-mongoose');
const createMethod = require('./methods/createMethod');

exports.Albums = class Albums extends Service {

  async create(data) {
    return await createMethod(data);
  }
  

};
