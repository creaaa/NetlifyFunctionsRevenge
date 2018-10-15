import { moment } from 'moment'

exports.handler = function(event, context, cb) {
    cb(null, {
      statusCode: 200,
      body: moment().format()
    });
    console.log("きてるよ")
  }