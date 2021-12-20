import React, { useEffect, useState } from 'react'
import * as videoService from '../../services/Video.service'
import { Video } from '../../interfaces/Video';
import VideoItem from './VideoItem';

export const VideosList = () => {

  const [videos, setVideos] = useState<Video[]>([])

  const loadVideos = async () => {
    const { data } = await videoService.getVideos()
    setVideos(data)
  }
  useEffect(() => {
    loadVideos()
  }, [])

  return (
    <div className='row'>
      { videos.map((video) => {
        return <VideoItem video={ video }/>
      }) }
    </div>
  )
}

export default VideosList