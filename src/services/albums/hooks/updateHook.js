module.exports = context => {
  if (context.result === 'No Album') {
    context.statusCode = 404;
  }
  return context;
};
