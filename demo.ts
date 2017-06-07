import requestClass from 'lib/request-class';
import { RequestFormat, LatLong } from 'lib/interfaces';
import * as moment from 'moment';

const SunriseFormat: RequestFormat = {
  postFormat: (results) => results.sort((a, b) => {
    return moment(a, 'hh:mm:ss A').valueOf() - moment(b, 'hh:mm:ss A').valueOf();
  }).map(r => r.results.day_length)[0]
};

const rc = new requestClass(SunriseFormat);

rc.reduce().then((result) => {
  console.log(`Day length for earliest sunrise ${result}`);
});