const request = require('request');

const getRequest = () => {
  const url = 'http://localhost:3000/rgbToHex?red=255&green=165&blue=0';
  request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    console.log('Status Code:', response && response.statusCode);
    console.log('Response Body:', body);
  });
};

getRequest();
