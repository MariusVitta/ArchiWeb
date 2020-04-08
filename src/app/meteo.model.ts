export class Meteo{
    location: {
        name: string;
        country: string;
        region: string;
    }
    current: {
        temperature: number;
        wind_speed: number;
        wind_dir: string;
        pressure: number;
        precip: number;
        humidity: number;
        cloudcover: number;
        feelslike: number;
        uv_index: number
        visibility: number;
    }
	/*
    */
}