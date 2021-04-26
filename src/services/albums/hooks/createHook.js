module.exports = context => {
  if (context.result === 'Invalid Input') {
    context.statusCode = 400;
  } else if (context.result.message === 'Already Exists') {
    context.statusCode = 409;
    context.result = context.result.data;
  } else if (context.result === 'No Artist') {
    context.statusCode = 422;
  } 
  return context;
};
  