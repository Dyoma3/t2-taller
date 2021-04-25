module.exports = context => {
  if (context.result === 'No Album') {
    context.statusCode = 404;
  } else {
    context.statusCode = 204;
  }
  return context;
};