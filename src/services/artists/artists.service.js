// Initializes the `artists` service on path `/artists`
const { Artists } = require('./artists.class');
const createModel = require('../../models/artists.model');
const hooks = require('./artists.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/artists', new Artists(options, app));
  // Get our initialized service so that we can register hooks
  const service = app.service('artists');

  app.use('/artists/:artistId/albums/play', service);
  app.service('artists/:artistId/albums/play').hooks({
    before: {
      update(context) {
        if(context.data && context.params.route.artistId) {
          context.data.artistId = context.params.route.artistId;
        }
      },
    }
  });

  service.hooks(hooks);
};
