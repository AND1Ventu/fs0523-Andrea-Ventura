// forecast.model.ts

export interface Forecast {
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure?: number; // Optional properties
    humidity?: number;

  };
  weather: Array<{
    id?: number;
    main?: string;
    description: string;
    icon?: string;

  }>;
  clouds?: {
    all?: number;
  };
  wind?: {
    speed?: number;
    deg?: number;
  };
  rain?: {
    '3h'?: number; // Rain volume for last 3 hours
  };
  snow?: {
    '3h'?: number; // Snow volume for last 3 hours
  };
  // Add more properties as needed
}
