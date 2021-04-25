module.exports = context => {
  if (
    context.result === 'No Album'
    || context.result === 'No Artist'
  ) {
    context.statusCode = 404;
  }
  return context;
};
