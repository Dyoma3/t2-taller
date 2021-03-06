const getHook = require('./hooks/getHook');
const createHook = require('./hooks/createHook');
const removeHook = require('./hooks/removeHook');
const updateHook = require('./hooks/updateHook');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [getHook],
    create: [createHook],
    update: [updateHook],
    patch: [],
    remove: [removeHook]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
