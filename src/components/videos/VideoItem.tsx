import React from 'react'
import { Props } from '../../interfaces/Props'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'

function VideoItem({ video }: Props) {
  const navigate = useNavigate();

  return (
    <div className='col-md-4'>
      <div className="card card-body" 
      style={{cursor:'pointer'}}
      onClick={() => navigate(`/update/${video._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h1>{ video.title }</h1>
          <span className='text-danger'>X</span>
        </div>
        
        <p>{ video.description }</p>

        <div className="container-rp ratio ratio-16x9">
          <ReactPlayer className="r-player" width="100%" height="100%" controls url={`${video.url}`} />
        </div>
      </div>
    </div>
  )
}

export default VideoItem
