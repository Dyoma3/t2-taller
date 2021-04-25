module.exports = context => {
  if (context.result === 'Invalid Input') {
    context.statusCode = 400;
  } else if (context.result === 'Already Exists') {
    context.statusCode = 409;
  }
  return context;
};
