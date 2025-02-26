import { api } from "./api";


const PhotoService = {
  async getPhotos({ roverName, sol, camera, page = 1, limit = 20  }) {
    try {
      const response = await api.get(`mars-photos`, {
        params: {
            rover: roverName,
            sol: sol,
            camera : camera,
            page,  
            limit,  
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching photos:", error);
      throw error;
    }
  },
};
export default PhotoService;