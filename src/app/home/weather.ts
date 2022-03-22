export interface IWeather {
  hourly: {
    temperature_2m: number[];
    time: string[];
  };
}
