import requestClass from 'lib/request-class';
import { EarliestSurniseDayLength, LongestDayInRange } from 'lib/interfaces';
import * as moment from 'moment';

const daylengthRequest = new requestClass(EarliestSurniseDayLength);

daylengthRequest.reduce();

const optimalWindAreaWithinLatLongRange = new requestClass(LongestDayInRange);

optimalWindAreaWithinLatLongRange.reduce();