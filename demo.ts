import requestClass from 'lib/request-class';
import { EarliestSurniseDayLength, LongestDayInRange } from 'lib/constants';


async function demoResults() {
  const daylengthRequest = new requestClass(EarliestSurniseDayLength);
  const daylength = await daylengthRequest.reduce();

  console.log(`Day length for earliest sunset: "${daylength}"" seconds`);

  const longestDayInRange = new requestClass(LongestDayInRange);
  const longestDay = await longestDayInRange.reduce();

  console.log(`Longest day in range: "${longestDay}" seconds`);
}

demoResults();
