module.exports = context => {
  if (context.result === 'No Track') {
    context.statusCode = 404;
  }
};
