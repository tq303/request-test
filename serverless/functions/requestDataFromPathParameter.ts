import * as HttpStatus from 'http-status-codes';

import request from 'lib/request-class';

export default function(event, context, callback) {

  callback(null, {
    statusCode: HttpStatus.OK,
    event,
    body: 'success'
  });

};