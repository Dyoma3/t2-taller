module.exports = context => {
  if (!context.result) {
    context.statusCode = 404;
  }
  return context;
};
