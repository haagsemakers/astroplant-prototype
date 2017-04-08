var request = require('request');

exports.handler = function(event, context) {

    var jsonObject = JSON.stringify(event);

    request({
        url: 'https://maker.ifttt.com/trigger/wmg_update/with/key/c2FI304AMm09Ruco8_qvCa',
        method: 'POST',
        json: {
          'value1': event.status,
          'value2': event.temp
        }
    }, function(error, response, body) {
      if(error) {
        console.log(error);
      } else {
        console.log(body);
        context.succeed('Done!');
      }
    });
};
