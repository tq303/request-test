import requestClass from 'lib/request-class';
import { EarliestSurniseDayLength, LongestDayLengthInRange } from 'lib/interfaces';
import * as moment from 'moment';

const daylengthRequest = new requestClass(EarliestSurniseDayLength);

console.log(`Day length for earliest sunrise ${async () => await daylengthRequest.reduce()}`);


const optimalWindAreaWithinLatLongRange = new requestClass(LongestDayLengthInRange);

console.log(`Day length for earliest sunrise ${async () => await optimalWindAreaWithinLatLongRange.reduce()}`);