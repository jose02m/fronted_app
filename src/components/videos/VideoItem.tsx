import React from 'react'
import { Props } from '../../interfaces/Props'


function VideoItem({ video }: Props) {
  return (
    <div>
      <h1>{ video.title }</h1>
      <p>{ video.url }</p>
    </div>
  )
}

export default VideoItem
