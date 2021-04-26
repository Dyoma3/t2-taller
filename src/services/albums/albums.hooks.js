const createHook = require('./hooks/createHook');
const findHook = require('./hooks/findHook');
const getHook = require('./hooks/getHook');
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
    find: [findHook],
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
