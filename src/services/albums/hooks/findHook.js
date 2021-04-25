module.exports = context => {
  if (context.result == 'No Artist') {
    context.statusCode = 404;
  }
};
