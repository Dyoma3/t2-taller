module.exports = context => {
  if (context.result === 'Invalid Input') {
    context.statusCode = 400;
  } else if (context.result === 'Already Exists') {
    context.statusCode = 409;
  } else if (context.result === 'No Artist') {
    context.statusCode = 422;
  } 
  return context;
};
  