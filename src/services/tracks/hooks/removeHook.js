module.exports = context => {
  if (context.result.n === 0) {
    context.statusCode = 404;
  } else {
    context.statusCode = 204;
  }
  return context;
};
