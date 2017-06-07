import requestClass from 'lib/request-class';
import { EarliestSurniseDayLength } from 'lib/interfaces';
import * as moment from 'moment';

const daylengthRequest = new requestClass(EarliestSurniseDayLength);

console.log(`Day length for earliest sunrise ${async () => await daylengthRequest.reduce()}`);


const surnise = new requestClass(EarliestSurniseDayLength);

console.log(`Day length for earliest sunrise ${async () => await surnise.reduce()}`);