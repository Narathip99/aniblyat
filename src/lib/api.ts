import axios from "axios";
// types
import { AiringAnimeResponse } from "@/types/airing";

// api base url
const API_BASE_URL = "https://api.jikan.moe/v4";

// getAiringAnime
export const getAiringAnime = async (): Promise<AiringAnimeResponse> => {
  try {
    const response = await axios.get<AiringAnimeResponse>(
      `${API_BASE_URL}/seasons/now`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching airing anime:", error);
    throw error;
  }
};
