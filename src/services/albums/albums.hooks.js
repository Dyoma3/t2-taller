const createHook = require('./hooks/createHook');
const findHook = require('./hooks/findHook');
const getHook = require('./hooks/getHook');
const removeHook = require('./hooks/removeHook');

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
    update: [],
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
