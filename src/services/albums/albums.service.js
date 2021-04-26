// Initializes the `albums` service on path `/albums`
const { Albums } = require('./albums.class');
const createModel = require('../../models/albums.model');
const hooks = require('./albums.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/albums', new Albums(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('albums');

  app.use('/artists/:artistId/albums', service);
  function mapArtistIdToData(context) {
    if(context.data && context.params.route.artistId) {
      context.data.artistId = context.params.route.artistId;
    }
  }
  app.service('artists/:artistId/albums').hooks({
    before: {
      find(context) {
        context.params.query.artistId = context.params.route.artistId;
      },
      create: mapArtistIdToData,
      update: mapArtistIdToData,
      patch: mapArtistIdToData,
    }  
  });

  app.use('/albums/:albumId/tracks/play', service);
  app.service('albums/:albumId/tracks/play').hooks({
    before: {
      update(context) {
        if(context.data && context.params.route.albumId) {
          context.data.albumId = context.params.route.albumId;
        }
      },
    }
  });

  service.hooks(hooks);
};
