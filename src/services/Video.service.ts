import axios from 'axios'
import { Video } from '../interfaces/Video';

const api = 'http://localhost:4000'

export const getVideos = async () => {
  return await axios.get<Video[]>(`${api}/videos`);
}

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${api}/video/${id}`);
}

export const insertVideo = async (video: Video) => {
  return await axios.post(`${api}/video`, video);
}