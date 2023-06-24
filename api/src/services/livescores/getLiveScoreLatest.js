const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.sportmonks.com/v3/football/livescores";
const league = "league,venue"
exports.getLiveScoreLatestFromAPI = async () => {
  try {
    const response = await axios.get(BASE_URL,{
      params:{
        api_token: API_KEY,
        include: league
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    throw error;
  }
};
