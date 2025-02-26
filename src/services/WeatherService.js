import { api } from "./api";


const WeatherService = {
  async getMarsWeather() {
    try {
      const response = await api.get(`mars-weather`);
      return response.data;
    } catch (error) {
      console.error("Error fetching mars weather:", error);
      throw error;
    }
  },
};
export default WeatherService;