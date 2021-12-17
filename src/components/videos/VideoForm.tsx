import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Video } from '../../interfaces/Video'

export const VideoForm = () => {

  const [video, setVideo] = useState<Video>({ title: '', description:'', url:'' })
  const handleInputange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(video)
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <form onSubmit={ handleSubmit }>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="title" onChange={ handleInputange }/>
              </div>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea name="description" className="form-control" onChange={ handleInputange } ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">url</label>
                <input type="text" className="form-control" name="url" onChange={ handleInputange } />
              </div>
              <button type="submit" className="btn btn-primary">Agregar video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoForm
