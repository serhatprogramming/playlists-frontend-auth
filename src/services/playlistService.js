import axios from "axios";
const API_URL = "/api/playlists";

const getPlaylists = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPlaylists };
