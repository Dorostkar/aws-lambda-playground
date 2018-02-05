'use strict';

module.exports.hello = (event, context, callback) => {
  if (event.queryStringParameters && event.queryStringParameters.name) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello ${event.queryStringParameters.name}, nice too meet you`
      })
    });
  }

  if (event.httpMethod === 'POST' && event.body) {
    let json = JSON.parse(event.body);

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hi, I have recived a JSON object from you.`,
        object: json
      })
    });
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
      input: event
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
