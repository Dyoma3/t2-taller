// Initializes the `tracks` service on path `/tracks`
const { Tracks } = require('./tracks.class');
const createModel = require('../../models/tracks.model');
const hooks = require('./tracks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tracks', new Tracks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tracks');

  app.use('/albums/:albumId/tracks', service);
  function mapAlbumIdToData(context) {
    if(context.data && context.params.route.albumId) {
      context.data.albumId = context.params.route.albumId;
    }
  }
  app.service('albums/:albumId/tracks').hooks({
    before: {
      find(context) {
        context.params.query.albumId = context.params.route.albumId;
      },
      create: mapAlbumIdToData,
      update: mapAlbumIdToData,
      patch: mapAlbumIdToData,
    }  
  });

  service.hooks(hooks);
};
