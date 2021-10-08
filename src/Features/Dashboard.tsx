import React from 'react';
/*
import {
  gql,
  useQuery,
} from '@apollo/client';
*/
import Chart from '../components/Chart';
/*
const query = gql`
  query ($latLong: WeatherQuery!) {
    getWeatherForLocation(latLong: $latLong) {
      description
      locationName
      temperatureinCelsius
    }
  }
`;

type WeatherData = {
  temperatureinCelsius: number;
  description: string;
  locationName: string;
};
type WeatherDataResponse = {
  getWeatherForLocation: WeatherData;
};
*/
function Dashboard() {
  return (
    <div>
      Dashboard goes here:
      <Chart />
    </div>
  );
}
export default Dashboard;
