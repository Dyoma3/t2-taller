// tracks-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'tracks';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    times_played: { type: Number, required: true },
    album_id: { type: String, required: true },
    artist_id: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    self: { type: String, required: true },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
