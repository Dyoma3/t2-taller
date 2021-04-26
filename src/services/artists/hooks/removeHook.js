module.exports = context => {
  if (context.result === 'No Artist') {
    context.statusCode = 404;
  } else {
    context.statusCode = 204;
  }
};
