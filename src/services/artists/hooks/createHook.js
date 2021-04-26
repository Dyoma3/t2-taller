module.exports = context => {
  if (context.result === 'Invalid Input') {
    context.statusCode = 400;
  } else if (context.result.message === 'Already Exists') {
    context.statusCode = 409;
    context.result = context.result.data;
  }
  return context;
};
